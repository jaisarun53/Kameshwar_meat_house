import { Body, Controller, Get, Put } from '@nestjs/common';

import { UpdateBusinessInfoDto } from './dto/update-business-info.dto';
import { BusinessInfoService } from './business-info.service';

@Controller('business-info')
export class BusinessInfoController {
  constructor(private readonly businessInfoService: BusinessInfoService) {}

  @Get()
  getBusinessInfo() {
    return this.businessInfoService.getBusinessInfo();
  }

  @Put()
  updateBusinessInfo(@Body() payload: UpdateBusinessInfoDto) {
    return this.businessInfoService.updateBusinessInfo(payload);
  }
}
