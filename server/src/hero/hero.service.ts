import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Hero, Prisma } from '@prisma/client';

Injectable();
export class HeroService {
  constructor(private prisma: PrismaService) {}

  async hero(where: Prisma.HeroWhereUniqueInput): Promise<Hero | null> {
    return await this.prisma.hero.findUnique({ where });
  }

  async heros(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.HeroWhereUniqueInput;
    where?: Prisma.HeroWhereInput;
    orderBy?: Prisma.HeroOrderByWithRelationInput;
  }): Promise<Hero[]> {
    return await this.prisma.hero.findMany({
      ...params,
    });
  }

  async addHero(data: Prisma.HeroCreateInput): Promise<Hero> {
    return await this.prisma.hero.create({ data });
  }

  async updateHero(params: {
    where: Prisma.HeroWhereUniqueInput;
    data: Prisma.HeroUpdateInput;
  }): Promise<Hero> {
    return await this.prisma.hero.update({ ...params });
  }

  async deleteHero(where: Prisma.HeroWhereUniqueInput): Promise<Hero> {
    return await this.prisma.hero.delete({ where });
  }
}
