import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'cart-details',
    loadChildren: () =>
      import('./checkout/checkout.module').then((m) => m.CheckoutModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'wish-list',
    loadChildren: () =>
      import('./wishlist/wishlist.module').then((m) => m.WishListModule),
  },
  {
    path: 'course-details',
    loadChildren: () =>
      import('./course-details/course-details.module').then(
        (m) => m.CourseDetailsModule
      ),
  },
];
