import { Injectable } from '@angular/core';
import { ApiService } from '../../api.service';
import { IProduct, IOrder } from '@shop-front/api-interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderPageService {
  constructor(private readonly apiService: ApiService) {}

  getProducts(): Observable<IProduct[]> {
    return this.apiService.get('/api/products');
  }

  saveOrder(order: IOrder): Promise<any> {
    return this.apiService.post('/api/orders', order).toPromise();
  }
}
