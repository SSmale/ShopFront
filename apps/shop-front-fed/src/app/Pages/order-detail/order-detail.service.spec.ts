/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OrderDetailService } from './order-detail.service';

describe('Service: OrderDetail', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderDetailService]
    });
  });

  it('should ...', inject([OrderDetailService], (service: OrderDetailService) => {
    expect(service).toBeTruthy();
  }));
});
