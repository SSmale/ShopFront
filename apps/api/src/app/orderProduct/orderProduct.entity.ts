import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, ManyToOne } from 'typeorm';
import { IOrderProduct } from '@shop-front/api-interfaces';
import { Product } from '../product/product.entity';
import { Order } from '../order/order.entity';

@Entity()
export class OrderProduct implements IOrderProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne('Order', 'products')
  order: Order;

  @ManyToOne('Product', 'product')
  product: Product;

  @Column({ default: false })
  picked: boolean;
}
