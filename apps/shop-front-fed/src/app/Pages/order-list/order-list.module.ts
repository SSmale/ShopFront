import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListService } from './order-list.service';
import { OrderListComponent } from './order-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [OrderListComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [OrderListService]
})
export class OrderListModule { }
