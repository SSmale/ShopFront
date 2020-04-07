import { NgModule } from '@angular/core';
import { OrderPageComponent } from './order-page.component';
import { OrderPageService } from './order-page.service';
import { OrderFormComponent } from '../../Components/order-form/order-form.component';
import { AppSharedModule } from '../../app-shared.module';

@NgModule({
  imports: [
    AppSharedModule
  ],
  providers: [OrderPageService],
  declarations: [
    OrderPageComponent,
    OrderFormComponent
  ]
})
export class OrderPageModule { }
