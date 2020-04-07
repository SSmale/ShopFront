import { Component, OnInit } from '@angular/core';
import { Order } from '../../../../../../libs/api-interfaces/src';
import { Observable } from 'rxjs';
import { OrderListService } from './order-list.service';

@Component({
  selector: 'shop-front-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders$: Observable<Order[]>

  constructor(private readonly orderService: OrderListService) {
  }

  ngOnInit(): void {
    this.orders$ = this.orderService.getOrders()
  }

}