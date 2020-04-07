import { Controller, Get, Post, Body } from '@nestjs/common';

import { Product, Order } from '@shop-front/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('products')
  getProducts(): Product[] {
    return this.appService.getProducts();
  }

  @Post('products')
  addProduct(): void {
    return this.appService.addProduct();
  }

  @Get('orders')
  getOrders(): Order[] {
    return this.appService.getOrders();
  }

  @Post('orders')
  addOrder(@Body() body: Order): void {
    return this.appService.addOrder(body);
  }
}
