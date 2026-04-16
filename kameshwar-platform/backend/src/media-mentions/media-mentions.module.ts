import { Module } from '@nestjs/common';

import { MediaMentionsController } from './media-mentions.controller';
import { MediaMentionsService } from './media-mentions.service';

@Module({
  controllers: [MediaMentionsController],
  providers: [MediaMentionsService],
})
export class MediaMentionsModule {}
