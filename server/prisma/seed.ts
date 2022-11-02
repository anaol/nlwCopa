import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      avatarUrl: 'https://github.com/diego3g.png',
      email: 'john.doe@gmail.com',
      name: 'John Doe',
    },
  });

  const pool = await prisma.pool.create({
    data: {
      code: 'BOL123',
      title: 'Example Pool',
      ownerId: user.id,

      participants: { create: { userId: user.id } },
    },
  });

  await prisma.game.create({
    data: {
      date: '2022-11-02T14:03:53.201Z',
      firstTeamCountryCode: 'DE',
      secondTeamCountryCode: 'BR',
    },
  });

  await prisma.game.create({
    data: {
      date: '2022-11-03T14:03:53.201Z',
      firstTeamCountryCode: 'BR',
      secondTeamCountryCode: 'AR',

      guesses: {
        create: {
          firstTeamPoints: 2,
          secondTeamPoints: 1,
          partipant: {
            connect: {
              userId_poolId: {
                userId: user.id,
                poolId: pool.id,
              },
            },
          },
        },
      },
    },
  });
}

main();
