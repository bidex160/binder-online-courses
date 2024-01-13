import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Course, CourseButton } from '../../models/course';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { FormControl, FormGroup } from '@angular/forms';
import { StorageService } from '../../services/storage.service';
import { UtilityService } from '../../services/utils.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChild('paginator') paginator: MatPaginator;
  form: FormGroup = new FormGroup({
    search: new FormControl(),
    priceRange: new FormControl(),
  });
  filter: any[] = ['Lowest', 'Highest'];
  courses: Course[] = [];
  filteredCourses: Course[] = [];
  pageIndex: number = 1;
  perPage: number = 4;

  actions: CourseButton[] = [
    {
      text: 'Add to Cart',
      type: 'primary',
      action: (ev) => this.addToCart(ev),
    },
    {
      text: 'Add the Wishlist',
      type: 'primary',
      action: (ev) => this.addToWishList(ev),
    },
  ];

  constructor(
    private courseService: CourseService,
    private storageService: StorageService,
    private utils: UtilityService
  ) {}

  ngOnInit(): void {
    this.courseService.fetchCourses();
    this.courseService.coursesSubject.subscribe(
      (r) =>
        (this.courses = r.map((course: Course, index: number) => {
          return { ...course, id: index };
        }))
    );
  }

  ngAfterViewInit() {
    this.paginator.page.subscribe((r) => {
      this.pageIndex = r.pageIndex + 1;
    });
  }

  get paginatedCourses() {
    if (!this.courses.length) return [];
    else {
      let start =
        this.pageIndex > 1
          ? (this.pageIndex - 1) * this.perPage
          : this.pageIndex - 1;
      let end =
        this.pageIndex * this.perPage < this.courses.length
          ? this.pageIndex * this.perPage
          : this.courses.length;
      let split = this.courses.slice(start, end);
      return split;
    }
  }

  addToCart = (course: Course) => {
    let savedcart = this.storageService.getItem('cart');
    let cartList: Course[] = [course];
    if (savedcart) {
      let findCourse = savedcart.find(
        (scourse: Course) => scourse.id == course.id
      );
      if (findCourse) {
        this.utils.showSnackBar(
          `Already exists in the cart.
           \n ${course.courseName}`,
          'danger'
        );
      } else {
        cartList = [...cartList, ...savedcart];
        this.storageService.saveItem('cart', cartList);
        this.utils.showSnackBar(
          'Course successfully added in the cart',
          'success'
        );
      }
    } else {
      this.storageService.saveItem('cart', cartList);
      this.utils.showSnackBar(
        'Course successfully added in the cart',
        'success'
      );
    }
  };

  addToWishList = (course: Course) => {
    let savedWishList = this.storageService.getItem('wishlist');
    let wishlist: Course[] = [course];
    if (savedWishList) {
      let findCourse = savedWishList.find(
        (scourse: Course) => scourse.id == course.id
      );
      if (findCourse) {
        this.utils.showSnackBar(
          `Already exists in the wishlist. \n ${course.courseName}`,
          'danger'
        );
      } else {
        wishlist = [...wishlist, ...savedWishList];
        this.storageService.saveItem('wishlist', wishlist);
        this.utils.showSnackBar(
          'Course successfully added in the wishlist',
          'success'
        );
      }
    } else {
      this.storageService.saveItem('wishlist', wishlist);
      this.utils.showSnackBar(
        'Course successfully added in the wishlist',
        'success'
      );
    }
  };

  filterByPriceRnge(range: string) {
    if (range?.toLowerCase()?.includes('lowest')) {
      this.courses.sort((a, b) => {
        let prevPrice = a.actualPrice.slice(1);
        let nextPrice = b.actualPrice.slice(1);
        console.log(prevPrice, nextPrice);
        return parseFloat(prevPrice) - parseFloat(nextPrice);
      });
    } else {
      this.courses.sort((a, b) => {
        let prevPrice = a.actualPrice.slice(1);
        let nextPrice = b.actualPrice.slice(1);
        return parseFloat(nextPrice) - parseFloat(prevPrice);
      });
    }
  }
}
