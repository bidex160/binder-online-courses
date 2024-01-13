import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { MessageType } from '../app/components/index.model';
// import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(private snackBar: MatSnackBar) {}

  showSnackBar(message: string, type: MessageType) {
    console.log(type);
    this.snackBar.open(message, undefined, {
      duration: 1000,
      horizontalPosition: 'start',
      verticalPosition: 'bottom',
      panelClass: type,
    });
  }

  // modal(modal: any, data: any, res: (res: any) => any) {
  //   this.dialog
  //     .open(modal, {
  //       width: 'auto',
  //       height: 'auto',
  //       data: data,
  //     })
  //     .afterClosed()
  //     .subscribe((r) => {
  //       console.log(r);
  //     });
  // }

  // closeModal() {
  //   this.dialogRef.close();
  // }
}
