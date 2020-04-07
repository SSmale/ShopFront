import { Injectable } from '@nestjs/common';
import { Product, Order } from '@shop-front/api-interfaces';

@Injectable()
export class AppService {

  products: Product[]
  orders: Order[]

  constructor() {
    this.products = [{ title: 'I am a test product!' }];
    this.orders = [
      {
        name: 'Simon', address: 'The Office', paid: true, products: [{
          title: 'Tea',
          picked: false
        }, {
          title: 'Chocy Biscuits',
          picked: false
        }], total: 100
      },
      {
        name: 'Deer', address: 'The House', paid: true, products: [{
          title: 'Tea',
          picked: false
        }, {
          title: 'Chocy Biscuits',
          picked: false
        }, {
          title: 'Potatoes',
          picked: false
        }, {
          title: 'Jelly',
          picked: false
        }
        ], total: 1000
      }];
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(index: number): Product {
    return this.products[index];
  }

  addProduct(): void {
    this.products.push({
      title: `product ${this.products.length + 1}`
    })
  }

  getOrders(): Order[] {
    return this.orders;
  }

  getOrder(index: number): Order {
    return this.orders[index];
  }

  updateOrder(index: number, order: Order): void {
    this.orders[index] = order;
  }

  addOrder(order: Order): void {
    this.orders.push(order)
  }
}
