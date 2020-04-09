import { NgModule } from '@angular/core';
import { OrderDetailComponent } from './order-detail.component';
import { OrderDetailService } from './order-detail.service';
import { AppSharedModule } from '../../app-shared.module';

@NgModule({
  imports: [
    AppSharedModule
  ],
  providers: [OrderDetailService],
  declarations: [OrderDetailComponent]
})
export class OrderDetailModule { }
