import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  findAll(
    @Query('limit', ParseIntPipe) limit: number,
    @Query('skip', ParseIntPipe) skip: number,
    @Query('sortBy', ParseIntPipe) sortBy: string,
    @Query('order') order: string,
  ) {
    return this.productsService.findAll(limit, skip, sortBy, order);
  }

  @Get('/categories')
  findCategories() {
    return this.productsService.findCategories();
  }
  @Get('/categories/:id')
  findCategory(
    @Query('limit', ParseIntPipe) limit: number,
    @Query('skip', ParseIntPipe) skip: number,
    @Param('id') id: string,
  ) {
    return this.productsService.findCategory(limit, skip, id);
  }

  @Get('/search')
  searchProduct(
    @Query('limit', ParseIntPipe) limit: number,
    @Query('skip', ParseIntPipe) skip: number,
    @Query('q') q: string,
  ) {
    return this.productsService.searchProduct(q, limit, skip);
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
