import { Body, Controller, Get, Post } from '@nestjs/common';

import { CreateTestimonialDto } from './dto/create-testimonial.dto';
import { TestimonialsService } from './testimonials.service';

@Controller('testimonials')
export class TestimonialsController {
  constructor(private readonly testimonialsService: TestimonialsService) {}

  @Get()
  getTestimonials() {
    return this.testimonialsService.getTestimonials();
  }

  @Post()
  createTestimonial(@Body() payload: CreateTestimonialDto) {
    return this.testimonialsService.createTestimonial(payload);
  }
}
