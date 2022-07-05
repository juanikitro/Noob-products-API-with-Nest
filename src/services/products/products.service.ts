import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dtos';
import { Product } from './../../entities/product.entity';

@Injectable()
export class ProductsService {
  private counterId = 0;

  private products: Product[] = [];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException(`Product ${id} not found`);
    }
    return product;
  }

  create(payload: CreateProductDto) {
    this.counterId = this.counterId + 1;
    const newProduct = { id: this.counterId, ...payload };
    this.products.push(newProduct);
    return newProduct;
  }

  update(productId: number, payload: UpdateProductDto) {
    const product = this.findOne(productId);
    if (!product) {
      throw new NotFoundException(`Product ${productId} not found`);
    }
    const index = this.products.findIndex((item) => item.id === productId);
    this.products[index] = {
      ...product,
      ...payload,
    };
    return this.products[index];
  }

  delete(productId: number) {
    const product = this.products.find((item) => item.id === productId);
    const index = this.products.findIndex((item) => item.id === productId);
    if (!product) {
      throw new NotFoundException(`Product ${productId} not found`);
    }
    return this.products.splice(index, index);
  }
}
