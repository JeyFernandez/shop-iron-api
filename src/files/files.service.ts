import { BadRequestException, Injectable } from '@nestjs/common';
import { existsSync } from 'fs';
import { join } from 'path';

@Injectable()
export class FilesService {
    staticProductsImages(imageName: string) {
    //Acceder a la ruta completa donde se encuentra la imagen
    const path = join(__dirname, '../../static/products', imageName);

    if (!existsSync(path)) {
      throw new BadRequestException(
        `No se encuentra el producto con la imagen ${imageName}`,
      );
    }

    return path;
  }
}