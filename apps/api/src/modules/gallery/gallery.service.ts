import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateGalleryImageDto } from './dto/create-gallery-image.dto';

@Injectable()
export class GalleryService {
  constructor(private readonly prisma: PrismaService) {}

  async getGallery() {
    return this.prisma.galleryImage.findMany({
      orderBy: {
        displayOrder: 'asc',
      },
    });
  }

  async createGalleryImage(payload: CreateGalleryImageDto) {
    return this.prisma.galleryImage.create({
      data: payload,
    });
  }
}
