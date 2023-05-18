import { Injectable } from '@nestjs/common';
import { CreateProviderDto } from './dto/create-providers.dto';
import { DataSource, Repository } from 'typeorm';
import { Provider } from './entities/providers.entity';
import { InjectRepository } from '@nestjs/typeorm';
import ProviderImage from './entities/providers-image.entity';

@Injectable()
export class ProviderService {
  constructor(
    @InjectRepository(Provider)
    private readonly providerRepository: Repository<Provider>,

    @InjectRepository(ProviderImage)
    private readonly providerImageRepository: Repository<ProviderImage>,
    private readonly dataSource: DataSource,
    ){}

    async create(providerDto:CreateProviderDto){
      const {images = [], ...providersDetalis} = providerDto
      const provider = await this.providerRepository.create({
        ...providersDetalis,
        images: images.map((image)=>
        this.providerImageRepository.create({url: image}))
      });
      await this.providerImageRepository.save(provider);
      return provider;
    }

  findAll() {
    return this.providerRepository.find({relations:['images']})
  }

  findOne(id: string) {
    return this.providerRepository.findOneBy({id});
  }

    async update(id: string, cambio: CreateProviderDto){
      const {images, ...updateAll} = cambio;

      const provider = await this.providerRepository.preload({
          id: id,
          ...updateAll,
      });
      //Consultar a la base de datos para modificarla.
      const queryRunner = await this.dataSource.createQueryRunner();
      await queryRunner.connect();
      await queryRunner.startTransaction();
      
      if(images){
          await queryRunner.manager.delete(ProviderImage, {provider: {id}});
          
          provider.images = await images.map((image)=>
          this.providerImageRepository.create({url: image})
          );
      }
      else{ 
          provider.images = await this.providerImageRepository.findBy({povider:{id}});
      }

      await queryRunner.manager.save(provider);
      await queryRunner.commitTransaction();
      await queryRunner.release();
      return provider;
  }
  
  async remove(id:string){
    const providerss = await this.findOne(id);
    await this.providerRepository.remove(providerss);
    return 'Provider removed successfully'
  }

}
