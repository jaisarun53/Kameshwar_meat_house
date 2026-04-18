import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../database/prisma/prisma.service';
import { UpdateBusinessInfoDto } from './dto/update-business-info.dto';

@Injectable()
export class BusinessInfoService {
  constructor(private readonly prisma: PrismaService) {}

  async getBusinessInfo() {
    return this.prisma.businessInfo.findFirst({
      include: {
        socialLinks: true,
      },
    });
  }

  async updateBusinessInfo(payload: UpdateBusinessInfoDto) {
    const existing = await this.prisma.businessInfo.findFirst();

    if (!existing) {
      return this.prisma.businessInfo.create({
        data: {
          name: payload.name,
          tagline: payload.tagline,
          story: payload.story,
          primaryPhone: payload.primaryPhone,
          whatsappPhone: payload.whatsappPhone,
          addressLine: payload.addressLine,
          ward: payload.ward,
          municipality: payload.municipality,
          district: payload.district,
          province: payload.province,
          country: payload.country,
          mapsUrl: payload.mapsUrl,
          openingHours: payload.openingHours,
          heroImageUrl: payload.heroImageUrl,
        },
      });
    }

    return this.prisma.businessInfo.update({
      where: {
        id: existing.id,
      },
      data: payload,
    });
  }
}
