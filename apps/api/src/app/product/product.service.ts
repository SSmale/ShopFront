import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private ordersRepository: Repository<Product>,
  ) {}

  findAll(): Promise<Product[]> {
    return this.ordersRepository.find();
  }

  findOne(id: string): Promise<Product> {
    return this.ordersRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.ordersRepository.delete(id);
  }
}
