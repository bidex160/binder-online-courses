import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course, CourseButton } from '../../../models/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  /**
   * Course contents
   */
  @Input() course: Course;
  /**
   * Action button's on the course card
   *
   */
  @Input() actions: CourseButton[] = [];

  /**
   * click handler
   */
  @Output() actionClicked = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  /**
   * get course tags and convert to string
   */
  get tags() {
    return this.course.tags.join(', ');
  }

  /**
   * get if course is discounted
   */
  get discounted() {
    return !!(
      this.course.discountPercentage != '0' && this.course.discountPercentage
    );
  }
}
