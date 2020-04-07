import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { OrderDetailService } from './order-detail.service';
import { Observable } from 'rxjs';
import { Order } from '../../../../../../libs/api-interfaces/src';


@Component({
  selector: 'shop-front-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  order$: Observable<Order>

  private id: number

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private readonly orderService: OrderDetailService
  ) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'))
    this.order$ = this.orderService.getOrder(this.id);
  }

}
