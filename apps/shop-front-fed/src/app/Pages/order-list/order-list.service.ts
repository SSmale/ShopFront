import { Injectable } from '@angular/core';
import { ApiService } from '../../api.service';
import { Observable } from 'rxjs';
import { IProduct, IOrder } from '@shop-front/api-interfaces';

@Injectable({
  providedIn: 'root',
})
export class OrderListService {
  constructor(private readonly apiService: ApiService) {}

  getProducts(): Observable<IProduct[]> {
    return this.apiService.get('/api/products');
  }

  getOrders(): Observable<IOrder[]> {
    return this.apiService.get('/api/orders');
  }
}
