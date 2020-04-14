import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderProduct } from './orderProduct.entity';
import { OrderProductService } from './orderProduct.service';
import { OrderProductController } from './orderProduct.controller';

@Module({
  imports: [TypeOrmModule.forFeature([OrderProduct])],
  providers: [OrderProductService],
  controllers: [OrderProductController],
})
export class OrderProductModule {}
