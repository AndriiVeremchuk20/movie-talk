import { PrismaClient } from '@prisma/client';
import { Heros } from './data';

const prisma = new PrismaClient();

const main = async () => {
  const res = await prisma.hero.createMany({
    data: Heros,
  });

  console.log(`Added ${res.count} new heros`);
};

main()
  .catch((error) => {
    console.log('Error');
    console.log(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
