import { TestBed } from '@angular/core/testing';
import { OrderPageModule } from './order-page.module';
describe('OrderPageModule', () => {
  let pipe: OrderPageModule;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [OrderPageModule] });
    pipe = TestBed.get(OrderPageModule);
  });
  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
