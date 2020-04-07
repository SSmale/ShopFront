import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shop-front-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit, OnDestroy {

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