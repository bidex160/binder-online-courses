import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { Course } from '../../models/course';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  courses: Course[] = [];
  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.fetchCourses();
    this.dashboardService.coursesSubject.subscribe((r) => (this.courses = r));
  }

  addToCart(course: Course) {
    console.log(course);
  }

  addToWishList(course: Course) {
    console.log(course);
  }
}
