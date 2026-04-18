import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateMenuCategoryDto, CreateMenuItemDto } from './dto/create-menu.dto';

@Injectable()
export class MenuService {
  constructor(private readonly prisma: PrismaService) {}

  async getCategories() {
    return this.prisma.category.findMany({
      include: {
        menuItems: {
          orderBy: {
            displayOrder: 'asc',
          },
        },
      },
      orderBy: {
        displayOrder: 'asc',
      },
    });
  }

  async createCategory(payload: CreateMenuCategoryDto) {
    return this.prisma.category.create({
      data: payload,
    });
  }

  async createMenuItem(payload: CreateMenuItemDto) {
    return this.prisma.menuItem.create({
      data: payload,
    });
  }
}
