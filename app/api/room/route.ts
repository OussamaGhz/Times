import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const CREATE = async (req: NextRequest) => {
  // get room data from the body
  const roomData = await req.json();

  // create the room
  const createdRoom = await prisma.room.create({
    data: roomData,
  });

  console.log("Room created successfully with id:", createdRoom.id);

  return NextResponse.json(createdRoom);
};

export const UPDATE = async (req: NextRequest) => {
  // get id and updated room data from the body
  const { id, ...updatedRoomData } = await req.json();

  // update the room
  const updatedRoom = await prisma.room.update({
    where: {
      id: id,
    },
    data: updatedRoomData,
  });

  console.log("Room updated successfully with id:", updatedRoom.id);

  return NextResponse.json(updatedRoom);
};

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
