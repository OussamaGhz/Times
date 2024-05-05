import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const DELETE = async (req: NextRequest) => {
  // get id from the body
  const { id } = await req.json();

  // check if id type is string
  if (typeof id !== "string") {
    return NextResponse.json(
      {
        message: "Error",
      },
      {
        status: 500,
      }
    );
  }

  console.log("Received DELETE request with id:", id);

  await prisma.time.deleteMany({
    where: {
      disponibilite: {
        roomId: id,
      },
    },
  });

  await prisma.disponibilite.deleteMany({
    where: {
      roomId: id,
    },
  });

  await prisma.room.delete({
    where: {
      id: id,
    },
  });

  console.log("Room deleted successfully with id:", id);

  // Reload the page after deleting the room

  return NextResponse.json({});
};
