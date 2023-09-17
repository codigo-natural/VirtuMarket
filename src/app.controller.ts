import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hello Platzi';
  }

  @Get('nuevo')
  newEndpoint() {
    return 'yo soy nuevo';
  }
  // En nextJS para las rutas no es necesario incluir el slash(/)
  @Get('/ruta/')
  newEndpoint2() {
    return 'yo soy nuevo con /slash/';
  }

  @Get('products')
  getProducts(
    @Query('limit') limit: number = 100,
    @Query('offset') offset: number = 0,
    @Query('brand') brand: string,
  ) {
    return `products: limit => ${limit} offset => ${offset} brand => ${brand}`;
  }
  @Get('products/filter')
  getProductFilter() {
    return `Yo soy un filter`;
  }

  @Get('products/:productId')
  getProduct(@Param('productId') productId: string) {
    return `product ${productId}`;
  }

  @Get('categories/:id/products/:productId')
  getCategory(@Param('productId') productId: string, @Param('id') id: string) {
    return `product ${productId} and ${id}`;
  }
}
