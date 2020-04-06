import { Injectable } from '@nestjs/common';
import { Product } from '@shop-front/api-interfaces';

@Injectable()
export class AppService {

  products: Product[]

  constructor() {
    this.products = [{ title: 'product 1' },{ title: 'product 2' }]
  }

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(): void {
    this.products.push({
      title: `product ${this.products.length + 1}`
    })
  }
}
