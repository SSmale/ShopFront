import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IOrder, IProduct, IOrderProduct } from '@shop-front/api-interfaces';

@Component({
  selector: 'shop-front-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css'],
})
export class OrderFormComponent implements OnInit {
  @Input() order: IOrder;
  @Input() products: IProduct[];

  @Output() save: EventEmitter<IOrder> = new EventEmitter<IOrder>();

  product: IOrderProduct;

  constructor() {
    this.product = this.getEmptyOrderProduct();
  }

  ngOnInit() {}

  onAddProduct(): void {
    this.order.products.push(this.product);
    this.product = this.getEmptyOrderProduct();
  }

  onAddOrder(): void {
    this.save.emit(this.order);
  }

  private getEmptyOrderProduct(): IOrderProduct {
    return {
      product: {
        title: undefined,
      },
      picked: false,
    };
  }
}
