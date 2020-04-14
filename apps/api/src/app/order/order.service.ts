import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';
import { IOrder } from '@shop-front/api-interfaces';
import { OrderProduct } from '../orderProduct/orderProduct.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private ordersRepository: Repository<Order>,
    @InjectRepository(OrderProduct)
    private orderProductRepository: Repository<OrderProduct>,
  ) {}

  findAll(): Promise<Order[]> {
    return this.ordersRepository.find({ relations: ['products', 'products.product'] });
  }

  findOne(id: string): Promise<Order> {
    return this.ordersRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.ordersRepository.delete(id);
  }

  async create(orderDTO: IOrder): Promise<Order> {
    const order = new Order();
    order.address = orderDTO.address;
    order.name = orderDTO.name;
    order.paid = orderDTO.paid;
    order.total = orderDTO.total;

    const orderRes = await this.ordersRepository.save(order);
    // TODO: SSMALE - error handling?
    const op = orderDTO.products.map(orderProduct => {
      const thing = new OrderProduct();
      const saveable = {
        ...thing,
        ...orderProduct,
        order: orderRes,
      };
      this.orderProductRepository.save(saveable);
    });

    return this.ordersRepository.findOne(orderRes.id);
  }
}
