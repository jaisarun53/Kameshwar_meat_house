import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreateTestimonialDto } from './dto/create-testimonial.dto';

@Injectable()
export class TestimonialsService {
  constructor(private readonly prisma: PrismaService) {}

  async getTestimonials() {
    return this.prisma.testimonial.findMany({
      orderBy: {
        displayOrder: 'asc',
      },
    });
  }

  async createTestimonial(payload: CreateTestimonialDto) {
    return this.prisma.testimonial.create({
      data: payload,
    });
  }
}
