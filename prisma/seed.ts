import { PrismaClient } from "@prisma/client";
import { roomData } from "./room-data";

const prisma = new PrismaClient();

async function seedRooms() {
  // Clear existing room data
  await prisma.room.deleteMany();

  console.log("Seeding rooms...");
  for (const room of roomData) {
    const createdRoom = await prisma.room.create({
      data: {
        nom: room.nom,
        type: room.type,
        capacite: room.capacite,

        // extract days from the object and map them to the database as an array of strings
        disponibilite: {
          set: room.disponibilite,
        },
      },
    });
    console.log();

    console.log(
      `Room with ID ${createdRoom.id} seeded successfully. ${createdRoom.disponibilite}`
    );
  }
  console.log("Room seeding completed.");
}

async function main() {
  try {
    await seedRooms();
  } catch (error) {
    console.error("Error seeding rooms:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
