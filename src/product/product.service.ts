import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>
    ){}

  async create(productoDto:CreateProductDto) {
    const product = await this.productRepository.create(productoDto);
    await this.productRepository.save(product);
    return product;
  }

  findAll() {
    return this.productRepository.find()
  }

  findOne(id: string) {
    return this.productRepository.findOneBy({id});
  }

  async update(id: string, cambioDto: CreateProductDto) {
    const findCategories = await this.findOne(id);
    const updateProduct = await this.productRepository.merge(
        findCategories,
        cambioDto
    );
    return this.productRepository.save(updateProduct);
  }
  
  async remove(id:string){
    const producto = await this.findOne(id);
    await this.productRepository.remove(producto);
    return 'Product removed successfully'
  }

}
