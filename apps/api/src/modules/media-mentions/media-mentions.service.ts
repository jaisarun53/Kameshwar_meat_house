import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateMediaMentionDto } from './dto/create-media-mention.dto';

@Injectable()
export class MediaMentionsService {
  constructor(private readonly prisma: PrismaService) {}

  async getMediaMentions() {
    return this.prisma.mediaMention.findMany({
      orderBy: [
        {
          isFeatured: 'desc',
        },
        {
          displayOrder: 'asc',
        },
      ],
    });
  }

  async createMediaMention(payload: CreateMediaMentionDto) {
    return this.prisma.mediaMention.create({
      data: payload,
    });
  }
}
