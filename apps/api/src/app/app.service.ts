import { Injectable } from '@nestjs/common';
import { Message, Product } from '@shop-front/api-interfaces';

@Injectable()
export class AppService {

  products: Product[]

  /**
   *
   */
  constructor() {
    this.products = [{title: 'product 1'}, {title: 'product 2'}]    
  }

  getData(): Message {
    return { message: 'Welcome to api!' };
  }

  getProducts(): Product[]{
    return this.products;
  }

  addProduct(): void {
    this.products.push({
      title: `product ${this.products.length + 1}`
    })
  }
}
