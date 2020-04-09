import { Test } from '@nestjs/testing';

import { AppService } from './app.service';
import { Product, Order } from '../../../../libs/api-interfaces/src';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('getProducts', () => {
    it('should return all products when getProducts is called', () => {
      const res = service.getProducts();
      expect(res).toStrictEqual([
        {
          title: 'I am a test product!',
        },
      ]);
    });
  });

  describe('getProduct', () => {
    it('should get the correct product by its index', () => {
      const res = service.getProduct(0);
      expect(res).toStrictEqual({
        title: 'I am a test product!',
      });
    });

    it('should get the undefined if there is no product', () => {
      const res = service.getProduct(1);
      expect(res).toStrictEqual(undefined);
    });

    it('should get the undefined if there is no product index', () => {
      const res = service.getProduct(undefined);
      expect(res).toStrictEqual(undefined);
    });
  });

  describe('addProduct', () => {
    it('should add a product to the array', () => {
      // const newProduct: Product = {
      //   title: 'newThing',
      // };
      service.addProduct();
      const res = service.getProducts();
      expect(res.length).toBe(2);
    });
  });

  describe('getOrders', () => {
    it('should return the array of orders', () => {
      const res = service.getOrders();
      expect(res).toStrictEqual([
        {
          name: 'Simon',
          address: 'The Office',
          paid: true,
          products: [
            {
              title: 'Tea',
              picked: false,
            },
            {
              title: 'Chocy Biscuits',
              picked: false,
            },
          ],
          total: 100,
        },
        {
          name: 'Deer',
          address: 'The House',
          paid: true,
          products: [
            {
              title: 'Tea',
              picked: false,
            },
            {
              title: 'Chocy Biscuits',
              picked: false,
            },
            {
              title: 'Potatoes',
              picked: false,
            },
            {
              title: 'Jelly',
              picked: false,
            },
          ],
          total: 1000,
        },
      ]);
    });
  });

  describe('getOrder', () => {
    it('should get the correct order by its index', () => {
      const res = service.getOrder(0);
      expect(res).toStrictEqual({
        name: 'Simon',
        address: 'The Office',
        paid: true,
        products: [
          {
            title: 'Tea',
            picked: false,
          },
          {
            title: 'Chocy Biscuits',
            picked: false,
          },
        ],
        total: 100,
      });
    });

    it('should get the undefined if there is no order', () => {
      const res = service.getOrder(2);
      expect(res).toStrictEqual(undefined);
    });

    it('should get the undefined if there is no order index', () => {
      const res = service.getOrder(undefined);
      expect(res).toStrictEqual(undefined);
    });
  });
  describe('updateOrder', () => {
    it('should update the order correctly', () => {
      const newOrder: Order = {
        name: 'Fred',
        address: 'The Office',
        paid: true,
        products: [
          {
            title: 'Tea',
            picked: false,
          },
          {
            title: 'Chocy Biscuits',
            picked: false,
          },
        ],
        total: 100,
      };
      service.updateOrder(1, newOrder);
      const res = service.getOrder(1);
      expect(res).toStrictEqual(newOrder);
    });
  });
  describe('addOrder', () => {
    it('should update the order correctly', () => {
      const newOrder: Order = {
        name: 'Fred',
        address: 'The Office',
        paid: true,
        products: [
          {
            title: 'Tea',
            picked: false,
          },
          {
            title: 'Chocy Biscuits',
            picked: false,
          },
        ],
        total: 100,
      };
      service.addOrder(newOrder);
      const res = service.getOrder(2);
      expect(res).toStrictEqual(newOrder);
    });
  });
});

// addOrder(order: Order): void {
//   this.orders.push(order);
// }
