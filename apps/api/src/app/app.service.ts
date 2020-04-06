import { Injectable } from '@nestjs/common';
import { Product, Order } from '@shop-front/api-interfaces';

@Injectable()
export class AppService {

  products: Product[]
  orders: Order[]

  constructor() {
    this.products = [];
    this.orders = [];
  }

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(): void {
    this.products.push({
      title: `product ${this.products.length + 1}`
    })
  }
  getOrders(): Order[] {
    return this.orders;
  }

  addOrder(): void {
    // this.orders.push({})
    console.log('addOrder');

  }
}
