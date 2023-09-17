import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit: number = 100,
    @Query('offset') offset: number = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `products: limit => ${limit} offset => ${offset} brand => ${brand}`,
    };
  }
  @Get('filter')
  getProductFilter() {
    return {
      message: `Yo soy un filter`,
    };
  }

  @Get(':productId')
  getOne(@Param('productId') productId: string) {
    return {
      message: `product ${productId}`,
    };
  }
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'accion de crear',
      payload,
    };
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }
  @Delete(':id')
  delete(@Param('id') id: number) {
    return id;
  }
}
