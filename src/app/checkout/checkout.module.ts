import { NgModule } from '@angular/core';
import { CheckoutComponent } from './checkout.component';
import { ComponentsModule } from '../components/components.module';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CheckoutComponent],
  imports: [CommonModule, ComponentsModule, CheckoutRoutingModule],
  providers: [],
})
export class CheckoutModule {}
