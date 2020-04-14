import { Component, OnInit } from '@angular/core';
import { IProduct, IOrder } from '@shop-front/api-interfaces';
import { Observable } from 'rxjs';
import { OrderPageService } from './order-page.service';

@Component({
  selector: 'shop-front-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css'],
})
export class OrderPageComponent implements OnInit {
  products$: Observable<IProduct[]>;

  order: IOrder;

  constructor(private readonly orderService: OrderPageService) {
    this.order = this.getEmptyOrder();
  }

  ngOnInit(): void {
    this.products$ = this.orderService.getProducts();
  }

  onOrderSave(order: IOrder): void {
    // this.orderService.saveOrder({ name: 'Simon', address: 'The Office', paid: true, products: [], total: 100 })
    if (
      !order.address ||
      !order.name ||
      !order.hasOwnProperty('paid') ||
      order.products.length === 0 ||
      order.total < 0
    ) {
      console.error('There are missing fields');

      return;
    }
    this.orderService.saveOrder(order);
  }

  private getEmptyOrder(): IOrder {
    return {
      id: undefined,
      address: undefined,
      name: undefined,
      paid: false,
      products: [],
      total: 0,
    };
  }
}
