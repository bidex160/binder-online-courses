import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Course, CourseButton } from '../../models/course';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { FormControl, FormGroup } from '@angular/forms';
import { StorageService } from '../../services/storage.service';
import { UtilityService } from '../../services/utils.service';

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
    private courseService: CourseService,
    private storageService: StorageService,
    private utils: UtilityService
  ) {}

  ngOnInit(): void {
    this.courseService.fetchCourses();
    this.courseService.coursesSubject.subscribe(
      (r) =>
        (this.courses = r.map((course: Course, index: number) => {
          return { ...course, id: index };
        }))
    );
  }

  ngAfterViewInit() {
    this.paginator.page.subscribe((r) => {
      this.perPage = r.pageSize;
      this.pageIndex = r.pageIndex + 1;
    });
  }

  /**
   * get courses per page
   */
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

  /**
   * arrange courses base on price ascending or descending order
   * @param range  lowest to highest / highest to lowest
   */
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
