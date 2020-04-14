import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { OrderModule } from './order/order.module';
import { OrderProductModule } from './orderProduct/orderProduct.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'remotemysql.com',
      port: 3306,
      username: 'BErDOf8s0M',
      password: 'xhaIB7bble',
      database: 'BErDOf8s0M',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    OrderModule,
    OrderProductModule,
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
