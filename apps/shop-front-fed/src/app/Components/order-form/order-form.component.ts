import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Order, Product } from '../../../../../../libs/api-interfaces/src';

@Component({
  selector: 'shop-front-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  @Input() order: Order;
  @Input() products: Product[]

  @Output() save: EventEmitter<Order> = new EventEmitter<Order>()

  product: Product

  constructor() {
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

  onAddOrder(): void {
    this.save.emit(this.order)
  }

}
