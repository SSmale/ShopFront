import { Injectable } from '@nestjs/common';
import { IProduct, IOrder } from '@shop-front/api-interfaces';

@Injectable()
export class AppService {
  products: IProduct[];
  orders: IOrder[];

  constructor() {}
}
