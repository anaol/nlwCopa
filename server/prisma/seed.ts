import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const user = await prisma.user.create({
        data: {
            name: "John Doe",
            email: "john.doe@gmail.com",
            avatarUrl: "https://github.com/simonelopess.png",
        },
    });

    const pool = await prisma.poll.create({
        data: {
            title: "Example Pool",
            code: "BOL123",
            ownerId: user.id,

            participants: {
                create: {
                    userId: user.id,
                },
            },
        },
    });

    await prisma.game.create({
        data: {
            date: "2022-11-02T12:00:00.168Z",
            firstTeamCountryCode: "DE",
            secondTeamCountryCode: "BR",
        },
    });

    await prisma.game.create({
        data: {
            date: "2022-11-03T12:00:00.168Z",
            firstTeamCountryCode: "BR",
            secondTeamCountryCode: "AR",

            guesses: {
                create: {
                    firstTeamPoint: 2,
                    secondTeamPoint: 1,

                    participant: {
                        connect: {
                            userId_pollId: {
                                userId: user.id,
                                pollId: pool.id,
                            },
                        },
                    },
                },
            },
        },
    });
}

main();
