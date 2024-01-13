import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UtilityService } from '../../../services/utils.service';
import { MatDialogRef } from '@angular/material/dialog';
import { StorageService } from '../../../services/storage.service';
const auth = {
  username: 'admin',
  password: 'dummy@123',
};
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  form: FormGroup = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  loading: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    private utils: UtilityService,
    private storageService: StorageService
  ) {}

  submit() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      if (
        this.form.value.username?.toLowerCase() ==
          auth.username?.toLowerCase() &&
        this.form.value.password?.toLowerCase() == auth.password?.toLowerCase()
      ) {
        this.storageService.saveItem('auth', this.form.value);
        this.dialogRef.close();
        this.utils.showSnackBar('login successfully', 'success');
      } else {
        this.utils.showSnackBar('Invalid login details', 'danger');
      }
    }, 1500);
  }
}
