import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { ComponentsModule } from '../components/components.module';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardService } from '../../services/dashboard.service';
import { NetworkService } from '../../services/network.service';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, ComponentsModule, DashboardRoutingModule],
  providers: [DashboardService, NetworkService],
})
export class DashboardModule {}
