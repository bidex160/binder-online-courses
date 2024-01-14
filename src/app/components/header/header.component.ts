import { Component, EventEmitter, Output } from '@angular/core';
import { Course } from '../../../models/course';
import { StorageService } from '../../../services/storage.service';
import { UtilityService } from '../../../services/utils.service';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() toggleNav: EventEmitter<any> = new EventEmitter();
  constructor(
    private storageService: StorageService,
    private utils: UtilityService,
    public dialog: MatDialog
  ) {}

  /**
   * get  number cart items from local storage
   * it return empty string if empty
   */
  get cartCount() {
    let savedcart: Course[] = this.storageService.getItem('cart');
    if (savedcart && savedcart?.length) return savedcart.length;
    return '';
  }

  get isLoggedIn() {
    return !!this.utils.isLoggedIn;
  }

  login() {
    this.dialog.open(LoginComponent, {});
  }

  openSideBar() {
    this.toggleNav.emit();
  }
}
