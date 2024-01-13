import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { MessageType } from '../app/components/index.model';
import { StorageService } from './storage.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(
    private snackBar: MatSnackBar,
    private storageService: StorageService
  ) {}

  showSnackBar(message: string, type: MessageType) {
    console.log(type);
    this.snackBar.open(message, undefined, {
      duration: 1000,
      horizontalPosition: 'start',
      verticalPosition: 'bottom',
      panelClass: type,
    });
  }

  get isLoggedIn() {
    return !!this.storageService.getItem('auth');
  }
}
