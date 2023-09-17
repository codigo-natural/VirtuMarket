import { Controller, Param, Get } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':id/products/:productId')
  getCategory(@Param('productId') productId: string, @Param('id') id: string) {
    return {
      message: `product ${productId} and ${id}`,
    };
  }
}
