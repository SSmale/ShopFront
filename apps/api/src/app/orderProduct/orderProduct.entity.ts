import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, ManyToOne } from 'typeorm';
import { IOrderProduct } from '@shop-front/api-interfaces';
import { Product } from '../product/product.entity';
import { Order } from '../order/order.entity';

@Entity()
export class OrderProduct implements IOrderProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne('Order', 'order')
  order: Order;

  @OneToOne('Product')
  @JoinColumn()
  product: Product;

  @Column({ default: false })
  picked: boolean;
}
