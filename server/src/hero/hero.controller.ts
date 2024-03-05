import { Controller, Get } from '@nestjs/common';
import { Hero } from '@prisma/client';
import { HeroService } from './hero.service';

@Controller('hero')
export class HeroController {
  constructor(private readonly heroService: HeroService) {}

  @Get()
  async get(): Promise<Hero[]> {
    return await this.heroService.heros({});
  }
}
