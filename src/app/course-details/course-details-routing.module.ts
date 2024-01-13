import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailsComponent } from './course-details.component';

const routes: Routes = [
  {
    path: '',
    component: CourseDetailsComponent,
    // children: [
    //   {
    //     path: '',
    //     component: CourseDetailsComponent,
    //   },
    //   {
    //     path: ':id',
    //     component: CourseDetailsComponent,
    //   },
    // ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseDetailsRoutingModule {}
