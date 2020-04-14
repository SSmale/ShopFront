import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IProduct } from '@shop-front/api-interfaces';

@Entity()
export class Product implements IProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;
}
