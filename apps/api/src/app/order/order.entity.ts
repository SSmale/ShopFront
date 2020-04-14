import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { IOrder } from '@shop-front/api-interfaces';
import { OrderProduct } from '../orderProduct/orderProduct.entity';

@Entity()
export class Order implements IOrder {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  paid: boolean;

  @Column()
  total: number;

  @OneToMany('OrderProduct', 'orderProduct')
  products: OrderProduct[];
}
