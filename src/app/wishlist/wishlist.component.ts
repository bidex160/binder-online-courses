import { Component, OnInit } from '@angular/core';
import { Course, CourseButton } from '../../models/course';
import { StorageService } from '../../services/storage.service';
import { UtilityService } from '../../services/utils.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css',
})
export class WishlistComponent implements OnInit {
  wishlist: Course[] = [];
  pageIndex: number = 1;
  perPage: number = 4;

  actions: CourseButton[] = [
    {
      text: 'Add to Cart',
      type: 'primary',
      action: (ev) => this.addToCart(ev),
    },
    {
      text: 'Delete',
      type: 'primary',
      action: (ev) => this.deleteCourse(ev),
    },
  ];

  constructor(
    private storageService: StorageService,
    private utils: UtilityService
  ) {}

  ngOnInit(): void {
    this.fetchWishList();
  }

  get paginatedCourses() {
    if (!this.wishlist.length) return [];
    else {
      let start =
        this.pageIndex > 1
          ? (this.pageIndex - 1) * this.perPage
          : this.pageIndex - 1;
      let end =
        this.pageIndex * this.perPage < this.wishlist.length
          ? this.pageIndex * this.perPage
          : this.wishlist.length;
      let split = this.wishlist.slice(start, end);
      return split;
    }
  }

  fetchWishList() {
    let wishlist: Course[] | null = this.storageService.getItem('wishlist');
    this.wishlist = wishlist || [];
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

  deleteCourse = (course: Course) => {
    let savedWishList: Course[] | null =
      this.storageService.getItem('wishlist');
    let courseIndex = savedWishList?.findIndex(
      (scourse: Course) => scourse.id == course.id
    );
    if (courseIndex != -1) {
      let filterCourse = savedWishList?.filter(
        (fcourse) => fcourse.id != course.id
      );
      this.wishlist = filterCourse || [];
      this.storageService.saveItem('wishlist', filterCourse);
      this.utils.showSnackBar(
        `Course successfully removed in the wish list. \n ${course.courseName}`,
        'danger'
      );
    } else {
      this.utils.showSnackBar('Course not found', 'warning');
    }
  };
}
