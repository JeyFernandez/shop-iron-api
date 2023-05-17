import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { DataSource, Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import ProductImage from './entities/product-image.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    @InjectRepository(ProductImage)
    private readonly productImageRepository: Repository<ProductImage>,
    private readonly dataSource: DataSource,
    ){}

    async create(productDto:CreateProductDto){
      const {images = [], ...productsDetalis} = productDto
      const product = await this.productRepository.create({
        ...productsDetalis,
        images: images.map((image)=>
        this.productImageRepository.create({url: image}))
      });
      await this.productImageRepository.save(product);
      return product;
    }

  findAll() {
    return this.productRepository.find({relations:['iamges']})
  }

  findOne(id: string) {
    return this.productRepository.findOneBy({id});
  }

    //actualizar product especifico
    async update(id: string, cambio: CreateProductDto){
      const {images, ...updateAll} = cambio;

      const product = await this.productRepository.preload({
          id: id,
          ...updateAll,
      });
      //Consultar a la base de datos para modificarla.
      const queryRunner = await this.dataSource.createQueryRunner();
      await queryRunner.connect();
      await queryRunner.startTransaction();
      
      //si vienen nuevas imagenes que se eliminen las anteriores
      if(images){
          await queryRunner.manager.delete(ProductImage, {product: {id}});
          
          product.images = await images.map((image)=>
          this.productImageRepository.create({url: image})
          );
      }
      else{ 
          product.images = await this.productImageRepository.findBy({product:{id}});
      }

      await queryRunner.manager.save(product);
      await queryRunner.commitTransaction();
      await queryRunner.release();
      return product;
  }
  
  async remove(id:string){
    const producto = await this.findOne(id);
    await this.productRepository.remove(producto);
    return 'Product removed successfully'
  }

}
