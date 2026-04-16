import { Body, Controller, Get, Post } from '@nestjs/common';

import { CreateInquiryDto } from './dto/create-inquiry.dto';
import { InquiriesService } from './inquiries.service';

@Controller('inquiries')
export class InquiriesController {
  constructor(private readonly inquiriesService: InquiriesService) {}

  @Get()
  getInquiries() {
    return this.inquiriesService.getInquiries();
  }

  @Post()
  createInquiry(@Body() payload: CreateInquiryDto) {
    return this.inquiriesService.createInquiry(payload);
  }
}
