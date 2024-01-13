import { NgModule } from '@angular/core';
import { WishlistComponent } from './wishlist.component';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { WishListRoutingModule } from './wishlist-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [WishlistComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    WishListRoutingModule,
    MatPaginatorModule,
    MatIconModule,
  ],
  providers: [],
})
export class WishListModule {}
