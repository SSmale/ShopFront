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

  saveOrder(order: Order): void {
    this.apiService.post('/api/products', order)
  }
}
