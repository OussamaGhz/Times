import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const userData: Prisma.AnneeCreateInput[] = [
  {
    annee: "1",
    specialites: {
      create: [
        {
          nom: "L1 Informatique SIGL (à distance)",
          sections: {
            create: [
              {
                nom: "Section 1",
                annee: "1",
                groupes: {
                  create: [
                    {
                      nom: "Groupe 1",
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          nom: "L1 Informatique LMD",
          sections: {
            create: [
              {
                nom: "Section 1",
                annee: "1",
                groupes: {
                  create: [
                    {
                      nom: "Groupe 1",
                    },
                    {
                      nom: "Groupe 2",
                    },
                    {
                      nom: "Groupe 3",
                    },
                    {
                      nom: "Groupe 4",
                    },
                  ],
                },
              },
              {
                nom: "Section 2",
                annee: "1",
                groupes: {
                  create: [
                    {
                      nom: "Groupe 1",
                    },
                    {
                      nom: "Groupe 2",
                    },
                    {
                      nom: "Groupe 3",
                    },
                    {
                      nom: "Groupe 4",
                    },
                  ],
                },
              },
              {
                nom: "Section 3",
                annee: "1",
                groupes: {
                  create: [
                    {
                      nom: "Groupe 1",
                    },
                    {
                      nom: "Groupe 2",
                    },
                    {
                      nom: "Groupe 3",
                    },
                    {
                      nom: "Groupe 4",
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  },
];

async function main() {
    console.log(`Start clearing data...`);
    
    // Clear data from collections
    await prisma.annee.deleteMany();
    await prisma.specialite.deleteMany();
    await prisma.section.deleteMany();
    await prisma.groupe.deleteMany();

    console.log(`Data cleared.`);
    
    console.log(`Start seeding ...`);
    for (const u of userData) {
        const user = await prisma.annee.create({
            data: u,
        });
        console.log(`Created user with id: ${user.id}`);
    }
    console.log(`Seeding finished.`);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
