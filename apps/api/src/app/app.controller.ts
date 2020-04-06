import { Controller, Get, Post } from '@nestjs/common';

import { Message, Product } from '@shop-front/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }
  @Get('products')
  getProducts(): Product[] {
    return this.appService.getProducts();
  }
  @Post('products')
  addProduct(): void {
    return this.appService.addProduct();
  }
}
