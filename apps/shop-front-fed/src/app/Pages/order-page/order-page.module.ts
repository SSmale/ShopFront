import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderPageComponent } from './order-page.component';
import { OrderPageService } from './order-page.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [OrderPageService],
  declarations: [OrderPageComponent]
})
export class OrderPageModule { }
