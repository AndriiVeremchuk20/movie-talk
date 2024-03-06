import { Controller, Get } from '@nestjs/common';
import { HeroService } from './hero.service';
import { Hero } from '@prisma/client';

@Controller('hero')
export class HeroController {
  constructor(private hero: HeroService) {}

  @Get()
  async getAll(): Promise<Hero[]> {
    return await this.hero.heros({});
  }
}
