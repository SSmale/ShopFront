import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message, Product } from '@shop-front/api-interfaces';
@Component({
  selector: 'shop-front-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hello$ : any;
  products : Product[];

  constructor(private http: HttpClient) {
    this.hello$ = this.http.get<Message>('/api/hello');
    this.products = [];

    this.fetch();
  }

  fetch(): void {
    this.http.get<Product[]>('api/products').subscribe(products => this.products = products)
  }

  addProduct(): void {
    this.http.post('api/products', {}).subscribe(() => this.fetch());
  }
}
