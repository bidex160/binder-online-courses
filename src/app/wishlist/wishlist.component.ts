import { Component, OnInit, ViewChild } from '@angular/core';
import { Course, CourseButton } from '../../models/course';
import { StorageService } from '../../services/storage.service';
import { UtilityService } from '../../services/utils.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css',
})
export class WishlistComponent implements OnInit {
  @ViewChild('paginator') paginator: MatPaginator;
  wishlist: Course[] = [];
  pageIndex: number = 1;
  perPage: number = 4;

  actions: CourseButton[] = [
    {
      text: 'Add to Cart',
      type: 'primary',
      action: (ev) => this.addToCart(ev),
    },
    {
      text: 'Delete',
      type: 'primary',
      action: (ev) => this.deleteCourse(ev),
    },
  ];

  constructor(
    private storageService: StorageService,
    private utils: UtilityService
  ) {}

  ngOnInit(): void {
    this.fetchWishList();
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
    if (!this.wishlist.length) return [];
    else {
      let start =
        this.pageIndex > 1
          ? (this.pageIndex - 1) * this.perPage
          : this.pageIndex - 1;
      let end =
        this.pageIndex * this.perPage < this.wishlist.length
          ? this.pageIndex * this.perPage
          : this.wishlist.length;
      let split = this.wishlist.slice(start, end);
      return split;
    }
  }

  /**
   * fetch saved wishlist
   */
  fetchWishList() {
    let wishlist: Course[] | null = this.storageService.getItem('wishlist');
    this.wishlist = wishlist || [];
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
   * detete course from wishlist handler
   * call removeWishList function from utils service
   * @param course  course to be delete
   */
  deleteCourse = (course: Course) => {
    this.utils
      .removeWishList(course)
      .then((r: any) => {
        this.wishlist = r.wishlist;
        this.utils.showSnackBar(r.message, 'success');
      })
      .catch((err) => {
        this.utils.showSnackBar(err.message, 'warning');
      });
  };
}
