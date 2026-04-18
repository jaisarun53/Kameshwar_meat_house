import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateInquiryDto } from './dto/create-inquiry.dto';

@Injectable()
export class InquiriesService {
  constructor(private readonly prisma: PrismaService) {}

  async getInquiries() {
    return this.prisma.inquiry.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async createInquiry(payload: CreateInquiryDto) {
    return this.prisma.inquiry.create({
      data: payload,
    });
  }
}
