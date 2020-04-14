import { Controller, Get } from '@nestjs/common';
import { OrderService } from './order.service';
import { Order } from './order.entity';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get('')
  getOrder(): Promise<Order[]> {
    console.log('Order/Order');

    return this.orderService.findAll();
  }
}
