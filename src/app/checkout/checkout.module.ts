import { NgModule } from '@angular/core';
import { CheckoutComponent } from './checkout.component';
import { ComponentsModule } from '../components/components.module';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [CheckoutComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    CheckoutRoutingModule,
    MatDialogModule,
  ],
  providers: [],
})
export class CheckoutModule {}
