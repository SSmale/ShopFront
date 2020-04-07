import { Injectable } from '@angular/core';
import { ApiService } from '../../api.service';
import { Observable } from 'rxjs';
import { Product } from '../../../../../../libs/api-interfaces/src';

@Injectable({
  providedIn: 'root'
})
export class OrderListService {

  constructor(private readonly apiService: ApiService) { }

  getProducts(): Observable<Product[]> {
    return this.apiService.get('/api/products')
  }
}
