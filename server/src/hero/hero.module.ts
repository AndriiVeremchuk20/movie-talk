import { Module } from '@nestjs/common';
import { HeroService } from './hero.service';
import { HeroController } from './hero.controller';
import { PrismaModule } from 'nestjs-prisma';

@Module({
  providers: [HeroService],
  controllers: [HeroController],
  imports: [PrismaModule],
})
export class HeroModule {}
