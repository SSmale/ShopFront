import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';

import { IProduct, IOrder } from '@shop-front/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('products')
  getProducts(): IProduct[] {
    return this.appService.getProducts();
  }

  @Get('product/:id')
  getProduct(@Param('id') index: number): IProduct {
    return this.appService.getProduct(index);
  }

  @Post('products')
  addProduct(): void {
    return this.appService.addProduct();
  }

  @Get('orders')
  getOrders(): IOrder[] {
    return this.appService.getOrders();
  }

  @Get('order/:id')
  getOrder(@Param('id') index: number): IOrder {
    return this.appService.getOrder(index);
  }

  @Put('order/:id')
  updateOrder(@Param('id') index: number, @Body() body: IOrder): void {
    this.appService.updateOrder(index, body);
  }

  @Post('orders')
  addOrder(@Body() body: IOrder): void {
    return this.appService.addOrder(body);
  }
}
