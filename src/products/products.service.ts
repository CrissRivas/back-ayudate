import { Body, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class ProductsService {
  constructor(private readonly httpService: HttpService) {}

  async create(createProductDto: CreateProductDto) {
    const { data } = await firstValueFrom(
      this.httpService.post('https://dummyjson.com/products', {
        createProductDto,
      }),
    );
    return data;
  }

  async findAll() {
    const { data } = await firstValueFrom(
      this.httpService.get('https://dummyjson.com/products'),
    );
    return data;
  }

  async findOne(id: number) {
    const { data } = await firstValueFrom(
      this.httpService.get('https://dummyjson.com/products/' + id),
    );
    return data;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const { data } = await firstValueFrom(
      this.httpService.put('https://dummyjson.com/products/' + id, {
        updateProductDto,
      }),
    );
    return data;
  }

  async remove(id: number) {
    const { data } = await firstValueFrom(
      this.httpService.delete('https://dummyjson.com/products/' + id),
    );
    return data;
  }
}
