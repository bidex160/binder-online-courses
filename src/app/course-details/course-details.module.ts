import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { CourseDetailsRoutingModule } from './course-details-routing.module';
import { CourseDetailsComponent } from './course-details.component';

@NgModule({
  declarations: [CourseDetailsComponent],
  imports: [CommonModule, ComponentsModule, CourseDetailsRoutingModule],
  providers: [],
})
export class CourseDetailsModule {}
