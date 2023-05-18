import { Module } from '@nestjs/common';
import { ProviderService } from './providers.service';
import { ProviderController } from './providers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Provider } from './entities/providers.entity';
import ProviderImage from './entities/providers-image.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Provider, ProviderImage])],
  controllers: [ProviderController],
  providers: [ProviderService]
})
export class ProviderModule {}
