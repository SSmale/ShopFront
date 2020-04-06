import { Component, OnInit } from '@angular/core';
import { Order, Product } from '../../../../../../libs/api-interfaces/src';

@Component({
  selector: 'shop-front-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  order: Partial<Order>;
  product: Product

  constructor() {
    this.order = {}
    this.order.products = []
    this.product = {
      title: undefined
    }
  }

  ngOnInit() {
  }

  onAddProduct(): void {
    this.order.products.push(this.product)
    this.product = {
      title: undefined
    }
  }

}
