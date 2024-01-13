import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StorageService } from '../../services/storage.service';
import { UtilityService } from '../../services/utils.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  form: FormGroup = new FormGroup({
    displayName: new FormControl(null, Validators.required),
    firstName: new FormControl(null, Validators.required),
    lastName: new FormControl(null),
    aboutYourself: new FormControl(null),
    profession: new FormControl(null),
    role: new FormControl(null),
    expertise: new FormControl(null),
    experience: new FormControl(null),
    areaOfInterest: new FormControl(null),
  });

  constructor(
    private storageService: StorageService,
    private utils: UtilityService
  ) {}

  ngOnInit(): void {
    this.setUserProfile();
  }

  get isProfessional() {
    return this.form.get('profession')?.value == 'professional';
  }

  setUserProfile() {
    let profile = this.storageService.getItem('profile');
    if (profile) this.form.patchValue(profile);
  }

  saveInfo() {
    try {
      this.storageService.saveItem('profile', this.form.value);
      this.utils.showSnackBar('Your profile is updated.', 'success');
    } catch (er) {
      this.utils.showSnackBar('Please try again', 'danger');
    }
  }
}
