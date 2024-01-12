import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../../../models/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  @Input() course: Course;
  @Output() cartEvent = new EventEmitter();
  @Output() wishListEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    // console.log(this.course);
  }

  get tags() {
    return this.course.tags.join(', ');
  }

  get discounted() {
    return (
      this.course.discountPercentage != '0' && this.course.discountPercentage
    );
  }

  /**
   * on add to cart button click
   */
  onAddToCart() {
    this.cartEvent.emit(this.course);
  }

  /**
   * on add to wishlist button click
   */
  onWishList() {
    this.wishListEvent.emit(this.course);
  }
}
