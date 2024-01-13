import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { ComponentsModule } from '../components/components.module';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CourseService } from '../../services/course.service';
import { NetworkService } from '../../services/network.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    DashboardRoutingModule,
    MatPaginatorModule,
    MatIconModule,
  ],
  providers: [CourseService, NetworkService],
})
export class DashboardModule {}
