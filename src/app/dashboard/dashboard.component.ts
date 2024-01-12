import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { Course } from '../../models/course';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { FormControl, FormGroup } from '@angular/forms';

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

  constructor(
    private dashboardService: DashboardService,
    private cdref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.dashboardService.fetchCourses();
    this.dashboardService.coursesSubject.subscribe(
      (r) => (this.courses = [...r])
    );
  }

  ngAfterViewInit() {
    this.paginator.page.subscribe((r) => {
      this.pageIndex = r.pageIndex + 1;
    });

    this.cdref.detectChanges();
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

  addToCart(course: Course) {
    console.log(course);
  }

  addToWishList(course: Course) {
    console.log(course);
  }

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
