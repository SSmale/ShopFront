import { Controller, Get } from '@nestjs/common';
import { OrderProduct } from './orderProduct.entity';
import { OrderProductService } from './orderProduct.service';

@Controller('orderProduct')
export class OrderProductController {
  constructor(private readonly orderProductService: OrderProductService) {}

  @Get('orderProduct')
  getorderProduct(): Promise<OrderProduct[]> {
    console.log('orderProduct/orderProduct');

    return this.orderProductService.findAll();
  }
}
