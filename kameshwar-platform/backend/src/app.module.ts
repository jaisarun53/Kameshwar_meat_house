import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { BusinessInfoModule } from './business-info/business-info.module';
import { GalleryModule } from './gallery/gallery.module';
import { HealthModule } from './health/health.module';
import { InquiriesModule } from './inquiries/inquiries.module';
import { MediaMentionsModule } from './media-mentions/media-mentions.module';
import { MenuModule } from './menu/menu.module';
import { PrismaModule } from './prisma/prisma.module';
import { TestimonialsModule } from './testimonials/testimonials.module';

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
