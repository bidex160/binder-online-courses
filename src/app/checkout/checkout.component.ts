import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Course, CourseButton } from '../../models/course';
import { StorageService } from '../../services/storage.service';
import { UtilityService } from '../../services/utils.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ResponseModalComponent } from '../components/response-modal/response-modal.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent implements OnInit {
  courses: Course[] = [];
  actions: CourseButton[] = [
    {
      text: 'Move to wishlist',
      type: 'primary',
      action: (ev) => this.moveToWishList(ev),
    },
    {
      text: 'Delete the course',
      type: 'primary',
      action: (ev) => this.removeFromCart(ev),
    },
  ];

  constructor(
    private storageService: StorageService,
    private utils: UtilityService,
    public dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.fetchCartCourses();
  }

  fetchCartCourses() {
    let savedcart = this.storageService.getItem('cart');
    this.courses = savedcart ? savedcart : [];
  }

  /**
   * remove course from wishlist handler
   * call removeFromCart function from utils service
   * @param course  course to be removed
   */
  removeFromCart = async (course: any) => {
    this.utils
      .removeFromCart(course)
      .then((r: any) => {
        this.courses = r.courses;
        this.utils.showSnackBar(r.message, 'success');
      })
      .catch((err) => {
        this.utils.showSnackBar(err.message, 'warning');
      });
  };

  /**
   * add course to wishlist handler
   * call addToWishList function from utils service
   * @param course  course to be added
   */
  moveToWishList = (course: any) => {
    this.utils
      .addToWishList(course)
      .then((r: any) => {
        this.utils.showSnackBar(r.message, 'success');
      })
      .catch((err) => {
        this.utils.showSnackBar(err.message, 'warning');
      });
  };

  /**
   * proceed to checkout handler
   * open a response modal
   */
  proceedToCheckout() {
    this.dialog
      .open(ResponseModalComponent, {
        width: '40vw',
        height: 'auto',
        data: {
          type: 1,
          message: 'Order Placed Succesfully!',
        },
      })
      .afterClosed()
      .subscribe((r: boolean) => {
        if (r)
          this.utils
            .emptyCart()
            .then((res) => {
              this.fetchCartCourses();
            })
            .catch((err) => {
              this.utils.showSnackBar('Please try again', 'danger');
            });
      });
  }

  get totalPrice() {
    return this.courses.reduce((accumulator, b) => {
      let nextPrice = parseFloat(b.actualPrice.slice(1));
      return accumulator + nextPrice;
    }, 0);
  }
}
