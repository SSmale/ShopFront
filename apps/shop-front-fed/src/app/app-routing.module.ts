import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { OrderPageComponent } from './Pages/order-page/order-page.component';
import { PageNoFoundComponent } from './Pages/page-no-found/page-no-found.component';
import { OrderDetailComponent } from './Pages/order-detail/order-detail.component';
import { OrderListComponent } from './Pages/order-list/order-list.component';

const routes: Routes = [
  { path: 'order-form', component: OrderPageComponent, data: { title: '- New Order Form' } },
  { path: 'orders', component: OrderListComponent, data: { title: '- All Orders' } },
  { path: 'orders/:id', component: OrderDetailComponent, data: { title: '- Single Order' } },
  {
    path: '',
    redirectTo: '/orders',
    pathMatch: 'full'
  },
  { path: '**', component: PageNoFoundComponent, data: { title: '- 404 - Page Not Found' } }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
