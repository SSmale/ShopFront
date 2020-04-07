import { Controller, Get, Post, Body, Param } from '@nestjs/common';

import { Product, Order } from '@shop-front/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('products')
  getProducts(): Product[] {
    return this.appService.getProducts();
  }

  @Get('product/:id')
  getProduct(@Param('id') index: number): Product {
    return this.appService.getProduct(index);
  }

  @Post('products')
  addProduct(): void {
    return this.appService.addProduct();
  }

  @Get('orders')
  getOrders(): Order[] {
    return this.appService.getOrders();
  }

  @Get('order/:id')
  getOrder(@Param('id') index: number): Order {
    return this.appService.getOrder(index);
  }

  @Post('orders')
  addOrder(@Body() body: Order): void {
    return this.appService.addOrder(body);
  }
}
