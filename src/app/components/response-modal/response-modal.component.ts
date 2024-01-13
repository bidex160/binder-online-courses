import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-response-modal',
  templateUrl: './response-modal.component.html',
  styleUrl: './response-modal.component.css',
})
export class ResponseModalComponent {
  constructor(
    public dialogRef: MatDialogRef<ResponseModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { type: number; message: string }
  ) {}

  closeModal(response: boolean = false) {
    this.dialogRef.close(response);
  }
}
