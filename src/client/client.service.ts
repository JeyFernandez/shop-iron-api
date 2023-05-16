import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';

@Injectable()
export class ClientService {
  create(createClientDto: CreateClientDto) {
    return 'This action adds a new client';
  }

  findAll() {
    return `This action returns all client`;
  }

  findOne(id: string) {
    return `This action returns a #${id} client`;
  }

  update(id: string, updateClientDto: CreateClientDto) {
    return `This action updates a #${id} client`;
  }

  remove(id: string) {
    return `This action removes a #${id} client`;
  }
}
