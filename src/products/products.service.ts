import { Body, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { idDto } from './dto/id.dto';
import { productsDto } from './dto/products.dto';
import { query } from 'express';

@Injectable()
export class ProductsService {
  constructor(private readonly httpService: HttpService) {}

  async create(createProductDto: CreateProductDto): Promise<idDto> {
    const { data } = await firstValueFrom(
      this.httpService.post('https://dummyjson.com/products/add', {
        createProductDto,
      }),
    );
    return data;
  }

  async findAll(
    limit: number = 30,
    skip: number = 0,
    sortBy: string = 'id',
    order: string = 'asc',
  ): Promise<productsDto> {
    const { data } = await firstValueFrom(
      this.httpService.get('https://dummyjson.com/products', {
        params: { limit, skip, sortBy, order },
      }),
    );
    return data;
  }

  async findCategories(): Promise<string[]> {
    const { data } = await firstValueFrom(
      this.httpService.get('https://dummyjson.com/products/category-list'),
    );
    return data;
  }

  async findCategory(
    limit: number = 30,
    skip: number = 0,
    id: string = 'beauty',
  ): Promise<productsDto> {
    const { data } = await firstValueFrom(
      this.httpService.get('https://dummyjson.com/products/category/' + id, {
        params: { limit, skip },
      }),
    );
    return data;
  }
  async searchProduct(
    q: string = '',
    limit: number = 30,
    skip: number = 0,
  ): Promise<productsDto> {
    const { data } = await firstValueFrom(
      this.httpService.get('https://dummyjson.com/products/search', {
        params: { q, limit, skip },
      }),
    );
    return data;
  }
  async findOne(id: number): Promise<CreateProductDto> {
    const { data } = await firstValueFrom(
      this.httpService.get('https://dummyjson.com/products/' + id),
    );
    return data;
  }

  async update(
    id: number,
    updateProductDto: UpdateProductDto,
  ): Promise<UpdateProductDto> {
    const { data } = await firstValueFrom(
      this.httpService.put('https://dummyjson.com/products/' + id, {
        updateProductDto,
      }),
    );
    return data;
  }

  async remove(id: number): Promise<CreateProductDto> {
    const { data } = await firstValueFrom(
      this.httpService.delete('https://dummyjson.com/products/' + id),
    );
    return data;
  }
}
