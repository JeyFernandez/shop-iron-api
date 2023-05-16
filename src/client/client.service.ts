import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { Client } from './entities/client.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>
    ){}

  async create(clientDto:CreateClientDto) {
    const client = await this.clientRepository.create(clientDto);
    await this.clientRepository.save(client);
    return client;
  }

  findAll() {
    return this.clientRepository.find()
  }

  findOne(id: string) {
    return this.clientRepository.findOneBy({id});
  }

  async update(id: string, cambioDto: CreateClientDto) {
    const findClient = await this.findOne(id);
    const updateClient = await this.clientRepository.merge(
        findClient,
        cambioDto
    );
    return this.clientRepository.save(updateClient);
  }
  
  async remove(id:string){
    const client = await this.findOne(id);
    await this.clientRepository.remove(client);
    return 'Client removed successfully'
  }
}
