import { Controller, Get, Param, Put, Body, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { IOrder } from '@shop-front/api-interfaces';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get('')
  getOrders(): Promise<IOrder[]> {
    return this.orderService.findAll();
  }

  @Get('/:id')
  getOrder(@Param('id') index: string): Promise<IOrder> {
    return this.orderService.findOne(index);
  }

  @Put('/:id')
  updateOrder(@Param('id') index: string, @Body() body: IOrder): Promise<IOrder> {
    return this.orderService.update(index, body);
  }

  @Post('')
  addOrder(@Body() body: IOrder): Promise<IOrder> {
    return this.orderService.create(body);
  }
}
