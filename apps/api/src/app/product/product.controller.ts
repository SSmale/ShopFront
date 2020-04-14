import { Controller, Get } from '@nestjs/common';
import { Product } from './product.entity';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('product')
  getproduct(): Promise<Product[]> {
    console.log('product/product');

    return this.productService.findAll();
  }
}
