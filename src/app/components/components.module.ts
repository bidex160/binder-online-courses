import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from './header/header.component';
import { CourseComponent } from './course/course.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSelectModule } from '@angular/material/select';
import { ButtonComponent } from './button/button.component';
import { AppInputComponent } from './app-input/app-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    HeaderComponent,
    CourseComponent,
    ButtonComponent,
    AppInputComponent,
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    FlexLayoutModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
  providers: [],
  exports: [
    HeaderComponent,
    CourseComponent,
    ButtonComponent,
    AppInputComponent,
  ],
})
export class ComponentsModule {}
