import { Controller, Get, Param, Put, Body, Post } from '@nestjs/common';
import { OrderProduct } from './orderProduct.entity';
import { OrderProductService } from './orderProduct.service';
import { IOrderProduct } from '../../../../../libs/api-interfaces/src';

@Controller('orderProduct')
export class OrderProductController {
  constructor(private readonly orderProductService: OrderProductService) {}

  @Get('')
  getorderProducts(): Promise<OrderProduct[]> {
    return this.orderProductService.findAll();
  }

  @Get('/:id')
  getorderProduct(@Param('id') index: string): Promise<IOrderProduct> {
    return this.orderProductService.findOne(index);
  }

  @Put('/:id')
  updateOrderProduct(@Param() index: string, @Body() body: IOrderProduct): Promise<IOrderProduct> {
    return this.updateOrderProduct(index, body);
  }

  @Post('')
  addOrderProduct(@Body() body: IOrderProduct): Promise<IOrderProduct> {
    return this.orderProductService.create(body);
  }
}
