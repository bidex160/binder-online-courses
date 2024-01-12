import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course, CourseButton } from '../../../models/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  @Input() course: Course;
  @Input() actions: CourseButton[] = [];
  @Output() actionClicked = new EventEmitter();

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
}
