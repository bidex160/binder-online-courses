import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { MessageType } from '../app/components/index.model';
import { StorageService } from './storage.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Course } from '../models/course';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(
    private snackBar: MatSnackBar,
    private storageService: StorageService
  ) {}

  /**
   * display a popup
   * @param message message for popup
   * @param type pop type e.g success
   */
  showSnackBar(message: string, type: MessageType) {
    this.snackBar.open(message, undefined, {
      duration: 1000,
      horizontalPosition: 'start',
      verticalPosition: 'bottom',
      panelClass: type,
    });
  }

  /**
   * check if user is logged in
   * @returns true / false
   */
  get isLoggedIn() {
    return !!this.storageService.getItem('auth');
  }

  /**
   * remove course from cart
   * @param course course to be removed
   * @returns object of message and optional courses
   */
  removeFromCart = (course: any) => {
    return new Promise((res, rej) => {
      let savedcart: Course[] | null = this.storageService.getItem('cart');
      let courseIndex = savedcart?.findIndex(
        (scourse: Course) => scourse.id == course.id
      );
      if (courseIndex != -1) {
        let filterCourse = savedcart?.filter(
          (fcourse) => fcourse.id != course.id
        );
        this.storageService.saveItem('cart', filterCourse);

        res({
          courses: filterCourse || [],
          message: `Course successfully removed in the cart. \n ${course.courseName}`,
        });
      } else {
        rej({ message: 'Course not found' });
      }
    });
  };

  /**
   * add course to cart
   * @param course course to be added
   * @returns object of message
   */
  addToCart = (course: Course) => {
    return new Promise((res, rej) => {
      let savedcart = this.storageService.getItem('cart');
      let cartList: Course[] = [course];
      if (savedcart) {
        let findCourse = savedcart.find(
          (scourse: Course) => scourse.id == course.id
        );
        if (findCourse) {
          rej({
            message: `Already exists in the cart.\n ${course.courseName}`,
          });
        } else {
          cartList = [...cartList, ...savedcart];
          this.storageService.saveItem('cart', cartList);
          res({ message: 'Course successfully added in the cart' });
        }
      } else {
        this.storageService.saveItem('cart', cartList);
        res({ message: 'Course successfully added in the cart' });
      }
    });
  };

  /**
   * add course to wishlist
   * @param course course to be added
   * @returns object of message
   */
  addToWishList = (course: Course) => {
    return new Promise((res, rej) => {
      let savedWishList = this.storageService.getItem('wishlist');
      let wishlist: Course[] = [course];
      if (savedWishList) {
        let findCourse = savedWishList.find(
          (scourse: Course) => scourse.id == course.id
        );
        if (findCourse) {
          rej({
            message: `Already exists in the wishlist. \n ${course.courseName}`,
          });
        } else {
          wishlist = [...wishlist, ...savedWishList];
          this.storageService.saveItem('wishlist', wishlist);
          res({ message: 'Course successfully added in the wishlist' });
        }
      } else {
        this.storageService.saveItem('wishlist', wishlist);
        res({ message: 'Course successfully added in the wishlist' });
      }
    });
  };

  /**
   * remove course from wishlist
   * @param course course to be removed
   * @returns object of message and optional courses
   */
  removeWishList = (course: any) => {
    return new Promise((res, rej) => {
      let savedWishList: Course[] | null =
        this.storageService.getItem('wishlist');
      let courseIndex = savedWishList?.findIndex(
        (scourse: Course) => scourse.id == course.id
      );
      if (courseIndex != -1) {
        let filterCourse = savedWishList?.filter(
          (fcourse) => fcourse.id != course.id
        );
        this.storageService.saveItem('wishlist', filterCourse);
        res({
          wishlist: filterCourse || [],
          message: `Course successfully removed in the wish list. \n ${course.courseName}`,
        });
      } else {
        rej({ message: 'Course not found' });
      }
    });
  };

  /**
   * empty cart
   */
  emptyCart = () => {
    return new Promise((res, rej)=>{
      try{
       this.storageService.removeItem('cart');
       res(true)
      }catch(error){
      rej(false);
      }
    })
  };
}
