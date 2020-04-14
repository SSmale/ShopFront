import { Injectable } from '@nestjs/common';
import { IProduct, IOrder } from '@shop-front/api-interfaces';

@Injectable()
export class AppService {
  products: IProduct[];
  orders: IOrder[];

  constructor() {
    this.products = [{ title: 'I am a test product!' }];
    this.orders = [
      // {
      //   id: -1,
      //   name: 'Simon',
      //   address: 'The Office',
      //   paid: true,
      //   products: [
      //     {
      //       title: 'Tea',
      //       picked: false,
      //     },
      //     {
      //       title: 'Chocy Biscuits',
      //       picked: false,
      //     },
      //   ],
      //   total: 100,
      // },
      // {
      //   id: -2,
      //   name: 'Deer',
      //   address: 'The House',
      //   paid: true,
      //   products: [
      //     {
      //       title: 'Tea',
      //       picked: false,
      //     },
      //     {
      //       title: 'Chocy Biscuits',
      //       picked: false,
      //     },
      //     {
      //       title: 'Potatoes',
      //       picked: false,
      //     },
      //     {
      //       title: 'Jelly',
      //       picked: false,
      //     },
      //   ],
      //   total: 1000,
      // },
    ];
  }

  getProducts(): IProduct[] {
    return this.products;
  }

  getProduct(index: number): IProduct {
    return this.products[index];
  }

  addProduct(): void {
    this.products.push({
      title: `product ${this.products.length + 1}`,
    });
  }

  getOrders(): IOrder[] {
    return this.orders;
  }

  getOrder(index: number): IOrder {
    return this.orders[index];
  }

  updateOrder(index: number, order: IOrder): void {
    this.orders[index] = order;
  }

  addOrder(order: IOrder): void {
    this.orders.push(order);
  }
}
