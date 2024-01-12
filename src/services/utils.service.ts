import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(private snackBar: MatSnackBar) {}

  showSnackBar(message: string, type: string) {
    this.snackBar.open(message, undefined, {
      duration: 1000,
      horizontalPosition: 'start',
      verticalPosition: 'bottom',
      panelClass: 'panelClass',
    });
  }
}
