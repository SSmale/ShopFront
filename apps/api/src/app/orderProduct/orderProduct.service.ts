import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderProduct } from './orderProduct.entity';
import { IOrderProduct } from '@shop-front/api-interfaces';

@Injectable()
export class OrderProductService {
  constructor(
    @InjectRepository(OrderProduct)
    private ordersRepository: Repository<OrderProduct>,
  ) {}

  findAll(): Promise<OrderProduct[]> {
    return this.ordersRepository.find({ relations: ['product', 'order'] });
  }

  findOne(id: string): Promise<OrderProduct> {
    return this.ordersRepository.findOne(id, { relations: ['product', 'order'] });
  }

  async remove(id: string): Promise<void> {
    await this.ordersRepository.delete(id);
  }

  create(body: IOrderProduct): Promise<IOrderProduct> {
    return this.ordersRepository.save(body);
  }
}
