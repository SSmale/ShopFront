import { Component, OnInit } from '@angular/core';
import { IOrder } from '@shop-front/api-interfaces';
import { Observable } from 'rxjs';
import { OrderListService } from './order-list.service';

@Component({
  selector: 'shop-front-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
})
export class OrderListComponent implements OnInit {
  orders$: Observable<IOrder[]>;

  constructor(private readonly orderService: OrderListService) {}

  ngOnInit(): void {
    this.orders$ = this.orderService.getOrders();
  }
}
