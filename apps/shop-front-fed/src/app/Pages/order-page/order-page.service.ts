import { Injectable } from '@angular/core';
import { ApiService } from '../../api.service';
import { Product, Order } from '../../../../../../libs/api-interfaces/src';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderPageService {

  constructor(private readonly apiService: ApiService) { }

  getProducts(): Observable<Product[]> {
    return this.apiService.get('/api/products')
  }

  async saveOrder(order: Order): Promise<any> {
    return await this.apiService.post('/api/orders', order).toPromise()
  }
}
