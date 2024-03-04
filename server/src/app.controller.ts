import { Controller, Get } from '@nestjs/common';
import { HeroService } from './hero.service';
import { Hero } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private readonly userService: HeroService) {}

  @Get()
  async getHeros(): Promise<Hero[]> {
    return await this.userService.heros({});
  }
}
