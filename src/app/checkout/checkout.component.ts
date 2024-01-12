import { Component, OnInit } from '@angular/core';
import { Course, CourseButton } from '../../models/course';
import { StorageService } from '../../services/storage.service';
import e from 'express';
import { UtilityService } from '../../services/utils.service';

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
    private utils: UtilityService
  ) {}
  ngOnInit(): void {
    this.fetchCartCourses();
  }

  fetchCartCourses() {
    let savedcart = this.storageService.getItem('cart');
    this.courses = savedcart ? savedcart : [];
  }

  removeFromCart = (course: any) => {
    let savedcart: Course[] | null = this.storageService.getItem('cart');
    let courseIndex = savedcart?.findIndex(
      (scourse: Course) => scourse.id == course.id
    );
    if (courseIndex != -1) {
      let filterCourse = savedcart?.filter(
        (fcourse) => fcourse.id != course.id
      );
      this.courses = filterCourse || [];
      this.storageService.saveItem('cart', filterCourse);
      this.utils.showSnackBar(
        `Course successfully removed in the cart. \n ${course.courseName}`,
        'error'
      );
    } else {
      this.utils.showSnackBar('Course not found', 'error');
    }
  };

  moveToWishList = (course: any) => {
    let savedWishList = this.storageService.getItem('wishlist');
    let wishlist: Course[] = [course];
    if (savedWishList) {
      let findCourse = savedWishList.find(
        (scourse: Course) => scourse.id == course.id
      );
      if (findCourse) {
        this.utils.showSnackBar(
          `Already exists in the wishlist. \n ${course.courseName}`,
          'error'
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

  proceedoCheckout() {}
}
