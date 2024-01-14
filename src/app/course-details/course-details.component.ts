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

  /**
   * add course to cart handler
   * call addToCart function from utils service
   * @param course  course to be added
   */
  addToCart = (course: Course) => {
    this.utils
      .addToCart(course)
      .then((r: any) => {
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
  addToWishList = (course: Course) => {
    this.utils
      .addToWishList(course)
      .then((r: any) => {
        this.utils.showSnackBar(r.message, 'success');
      })
      .catch((err) => {
        this.utils.showSnackBar(err.message, 'warning');
      });
  };
}
