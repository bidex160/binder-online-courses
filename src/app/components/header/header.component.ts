import { Component } from '@angular/core';
import { Course } from '../../../models/course';
import { StorageService } from '../../../services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private storageService: StorageService) {}

  /**
   * get  number cart items from local storage
   * it return empty string if empty
   */
  get cartCount() {
    let savedcart: Course[] = this.storageService.getItem('cart');
    if (savedcart && savedcart?.length) return savedcart.length;
    return '';
  }
}
