import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Order, Product, OrderProduct } from '../../../../../../libs/api-interfaces/src';

@Component({
  selector: 'shop-front-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  @Input() order: Order;
  @Input() products: Product[]

  @Output() save: EventEmitter<Order> = new EventEmitter<Order>()

  product: OrderProduct

  constructor() {
    this.product = this.getEmptyOrderProduct()
  }

  ngOnInit() {
  }

  onAddProduct(): void {
    this.order.products.push(this.product)
    this.product = this.getEmptyOrderProduct()
  }

  onAddOrder(): void {
    this.save.emit(this.order)
  }

  private getEmptyOrderProduct(): OrderProduct {
    return {
      title: undefined,
      picked: false
    }
  }

}
