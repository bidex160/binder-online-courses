import { NgModule } from '@angular/core';
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
import { RouterModule } from '@angular/router';
import { VideoCardComponent } from './video-card/video-card.component';
import { ResponseModalComponent } from './response-modal/response-modal.component';
import { LoginComponent } from './login/login.component';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';

@NgModule({
  declarations: [
    HeaderComponent,
    CourseComponent,
    ButtonComponent,
    AppInputComponent,
    VideoCardComponent,
    ResponseModalComponent,
    LoginComponent,
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
    FlexLayoutServerModule,
    MatDialogModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [],
  exports: [
    HeaderComponent,
    CourseComponent,
    ButtonComponent,
    VideoCardComponent,
    AppInputComponent,
    LoginComponent,
    ResponseModalComponent,
  ],
})
export class ComponentsModule {}
