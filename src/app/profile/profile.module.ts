import { NgModule } from '@angular/core';
import { ComponentsModule } from '../components/components.module';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  providers: [],
})
export class ProfileModule {}
