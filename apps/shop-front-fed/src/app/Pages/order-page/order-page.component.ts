import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../../../../../../libs/api-interfaces/src';
import { Subscription } from 'rxjs';
import { OrderPageService } from './order-page.service';

@Component({
  selector: 'shop-front-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit, OnDestroy {

  orders$: Product[]

  private subs: Subscription[]

  constructor(private readonly orderService: OrderPageService) {
    this.subs = [];
  }

  ngOnInit(): void {
    this.subs.push(this.orderService.getProducts().subscribe(res => this.orders$ = res))
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe())
  }

}
