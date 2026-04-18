import { Body, Controller, Get, Post } from '@nestjs/common';

import { CreateGalleryImageDto } from './dto/create-gallery-image.dto';
import { GalleryService } from './gallery.service';

@Controller('gallery')
export class GalleryController {
  constructor(private readonly galleryService: GalleryService) {}

  @Get()
  getGallery() {
    return this.galleryService.getGallery();
  }

  @Post()
  createGalleryImage(@Body() payload: CreateGalleryImageDto) {
    return this.galleryService.createGalleryImage(payload);
  }
}
