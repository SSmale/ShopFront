import { Component, OnInit } from '@angular/core';
import { Product, Order } from '../../../../../../libs/api-interfaces/src';
import { Observable } from 'rxjs';
import { OrderPageService } from './order-page.service';

@Component({
  selector: 'shop-front-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {

  products$: Observable<Product[]>;

  order: Order;

  constructor(private readonly orderService: OrderPageService) {
    this.order = this.getEmptyOrder();
  }

  ngOnInit(): void {
    this.products$ = this.orderService.getProducts()
  }

  onOrderSave(order: Order): void {
    // this.orderService.saveOrder({ name: 'Simon', address: 'The Office', paid: true, products: [], total: 100 })
    if (!order.address || !order.name || !order.hasOwnProperty('paid') || order.products.length === 0 || order.total < 0) {
      console.error('There are missing fields');

      return;
    }
    this.orderService.saveOrder(order)
  }

  private getEmptyOrder(): Order {
    return {
      address: undefined,
      name: undefined,
      paid: false,
      products: [],
      total: 0
    }
  }

}
