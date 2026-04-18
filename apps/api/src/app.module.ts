import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { BusinessInfoModule } from './modules/business-info/business-info.module';
import { GalleryModule } from './modules/gallery/gallery.module';
import { HealthModule } from './modules/health/health.module';
import { InquiriesModule } from './modules/inquiries/inquiries.module';
import { MediaMentionsModule } from './modules/media-mentions/media-mentions.module';
import { MenuModule } from './modules/menu/menu.module';
import { PrismaModule } from './database/prisma/prisma.module';
import { TestimonialsModule } from './modules/testimonials/testimonials.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    PrismaModule,
    HealthModule,
    BusinessInfoModule,
    MenuModule,
    GalleryModule,
    TestimonialsModule,
    MediaMentionsModule,
    InquiriesModule,
  ],
})
export class AppModule {}
