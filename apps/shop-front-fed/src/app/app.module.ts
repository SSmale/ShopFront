import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ApiService } from './api.service';
import { OrderPageModule } from './Pages/order-page/order-page.module';
import { OrderListModule } from './Pages/order-list/order-list.module';
import { AppSharedModule } from './app-shared.module';
import { OrderDetailModule } from './Pages/order-detail/order-detail.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppSharedModule,
    OrderPageModule,
    OrderListModule,
    OrderDetailModule,
    AppRoutingModule,
  ],
  providers: [ApiService, Title],
  bootstrap: [AppComponent],
})
export class AppModule {}
