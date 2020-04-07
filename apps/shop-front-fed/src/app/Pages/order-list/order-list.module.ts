import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListService } from './order-list.service';
import { OrderListComponent } from './order-list.component';



@NgModule({
  declarations: [OrderListComponent],
  imports: [
    CommonModule
  ],
  providers: [OrderListService]
})
export class OrderListModule { }
