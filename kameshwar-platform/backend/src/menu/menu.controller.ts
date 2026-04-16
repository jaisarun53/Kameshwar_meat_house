import { Body, Controller, Get, Post } from '@nestjs/common';

import { CreateMenuCategoryDto, CreateMenuItemDto } from './dto/create-menu.dto';
import { MenuService } from './menu.service';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get('categories')
  getCategories() {
    return this.menuService.getCategories();
  }

  @Post('categories')
  createCategory(@Body() payload: CreateMenuCategoryDto) {
    return this.menuService.createCategory(payload);
  }

  @Post('items')
  createMenuItem(@Body() payload: CreateMenuItemDto) {
    return this.menuService.createMenuItem(payload);
  }
}
