import { Body, Controller, Get, Post } from '@nestjs/common';

import { CreateMediaMentionDto } from './dto/create-media-mention.dto';
import { MediaMentionsService } from './media-mentions.service';

@Controller('media-mentions')
export class MediaMentionsController {
  constructor(private readonly mediaMentionsService: MediaMentionsService) {}

  @Get()
  getMediaMentions() {
    return this.mediaMentionsService.getMediaMentions();
  }

  @Post()
  createMediaMention(@Body() payload: CreateMediaMentionDto) {
    return this.mediaMentionsService.createMediaMention(payload);
  }
}
