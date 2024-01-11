import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { ComponentsModule } from '../components/components.module';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardService } from '../../services/dashboard.service';
import { NetworkService } from '../../services/network.service';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    DashboardRoutingModule,
    MatPaginatorModule,
  ],
  providers: [DashboardService, NetworkService],
})
export class DashboardModule {}
