import { Product } from './entities/product.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(@InjectRepository(Product) private repo: Repository<Product>) {}

  createProduct(createProductDto: CreateProductDto) {
    const product = this.repo.create(createProductDto);
    return this.repo.save(product);
  }

  findAllProducts() {
    return this.repo.find();
  }

  findOneProduct(id: number) {
    return this.repo.findOneBy({ id });
  }

  async updateProduct(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.findOneProduct(id);
    if (!product) {
      throw new NotFoundException('product not found in repository');
    }

    Object.assign(product, updateProductDto);

    return this.repo.save(product);
  }

  async removeProduct(id: number) {
    const product = await this.findOneProduct(id);

    if (!product) {
      throw new NotFoundException('product not found in repository');
    }

    return this.repo.remove(product);
  }
}
