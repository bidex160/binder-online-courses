import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { Course, CourseButton } from '../../models/course';
import { StorageService } from '../../services/storage.service';
import { UtilityService } from '../../services/utils.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css',
})
export class CourseDetailsComponent implements OnInit {
  courseId: number;
  course: Course | undefined;
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
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService,
    private storageService: StorageService,
    private utils: UtilityService
  ) {}

  ngOnInit(): void {
    this.courseId = this.activatedRoute.snapshot.queryParams['id'];
    this.courseService.fetchCourses();
    this.courseService.coursesSubject.subscribe((r: Course[]) => {
      this.course =
        r
          ?.map((course: Course, index: number) => {
            return { ...course, id: index };
          })
          .find((course) => course.id == this.courseId) || undefined;
    });
  
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
          'error'
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
}
