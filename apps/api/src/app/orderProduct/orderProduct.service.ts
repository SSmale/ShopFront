import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderProduct } from './orderProduct.entity';

@Injectable()
export class OrderProductService {
  constructor(
    @InjectRepository(OrderProduct)
    private ordersRepository: Repository<OrderProduct>,
  ) {}

  findAll(): Promise<OrderProduct[]> {
    return this.ordersRepository.find();
  }

  findOne(id: string): Promise<OrderProduct> {
    return this.ordersRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.ordersRepository.delete(id);
  }
}
