/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OrderPageService } from './order-page.service';

describe('Service: OrderPage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderPageService]
    });
  });

  it('should ...', inject([OrderPageService], (service: OrderPageService) => {
    expect(service).toBeTruthy();
  }));
});
