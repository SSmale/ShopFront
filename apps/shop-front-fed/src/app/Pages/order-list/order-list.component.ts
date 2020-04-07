import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../../../../../../libs/api-interfaces/src';
import { Subscription } from 'rxjs';
import { OrderListService } from './order-list.service';

@Component({
  selector: 'shop-front-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit, OnDestroy {

  orders$: Product[]

  private subs: Subscription[]

  constructor(private readonly orderService: OrderListService) {
    this.subs = [];
  }

  ngOnInit(): void {
    this.subs.push(this.orderService.getProducts().subscribe(res => this.orders$ = res))
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe())
  }

}