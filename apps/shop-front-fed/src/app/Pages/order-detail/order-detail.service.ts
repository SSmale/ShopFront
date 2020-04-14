import { Injectable } from '@angular/core';
import { ApiService } from '../../api.service';
import { Observable } from 'rxjs';
import { IOrder } from '@shop-front/api-interfaces';

@Injectable({
  providedIn: 'root',
})
export class OrderDetailService {
  constructor(private readonly apiService: ApiService) {}

  getOrder(id: number): Observable<IOrder> {
    return this.apiService.get(`/api/order/${id}`);
  }

  updateOrder(id: number, order: IOrder): Promise<any> {
    return this.apiService.put(`/api/order/${id}`, order).toPromise();
  }
}
