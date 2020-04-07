import { Injectable } from '@angular/core';
import { ApiService } from '../../api.service';
import { Observable } from 'rxjs';
import { Order } from '../../../../../../libs/api-interfaces/src';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {

  constructor(private readonly apiService: ApiService) { }

  getOrder(id: number): Observable<Order> {
    return this.apiService.get(`/api/order/${id}`)
  }

  updateOrder(id: number, order: Order): Promise<any> {
    return this.apiService.put(`/api/order/${id}`, order).toPromise()
  }
}
