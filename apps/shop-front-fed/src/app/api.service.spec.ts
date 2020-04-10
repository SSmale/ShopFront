/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';
describe('Service: App', () => {
  let httpMock: HttpTestingController;
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    });
  });

  beforeEach(inject([ApiService, HttpTestingController], (_service, _httpMock) => {
    service = _service;
    httpMock = _httpMock;
  }));

  it('should get the thing', () => {
    service.get('/api/orders').subscribe(x => {
      console.log(x);
      expect(x).toBe(3);

      const req = httpMock.expectOne('https://foo.bar.com/airports');

      req.flush({});
      httpMock.verify();
    });
  });
});
