import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getRoomData() {
  try {
    const rooms = await prisma.room.findMany({
      include: {
        disponibilite: {
          include: {
            times: true,
          },
        },
      },
    });
    return rooms;
  } catch (error) {
    console.error("Error retrieving room data:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

export default getRoomData;
