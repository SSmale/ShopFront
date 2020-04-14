import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './order.entity';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { OrderProduct } from '../orderProduct/orderProduct.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order]), TypeOrmModule.forFeature([OrderProduct])],
  providers: [OrderService],
  controllers: [OrderController],
})
export class OrderModule {}
