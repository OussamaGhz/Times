import { Disponibilite, PrismaClient, Room, Time } from "@prisma/client";
import { log } from "console";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const POST = async (req: NextRequest) => {
  // add the (following the db schema) room to the database
  const { nom, type, capacite, disponibilite } = await req.json();
  console.log(
    "Received POST request with body:",
    nom,
    type,
    capacite,

    disponibilite
  );

  if (
    typeof nom !== "string" ||
    typeof type !== "string" ||
    typeof capacite !== "number"
  ) {
    return NextResponse.json(
      {
        message: "Error",
      },
      {
        status: 500,
      }
    );
  }

  const existingRoom = await prisma.room.findFirst({
    where: {
      nom, // Assuming "nom" is a unique identifier for a room
    },
  });

  if (existingRoom) {
    // If the room already exists, you can handle it accordingly
    return NextResponse.json(
      {
        message: "Room already exists",
      },
      {
        status: 500,
      }
    );
  } else {
    const room: Room = await prisma.room.create({
      data: {
        nom: nom,
        type: type,
        capacite: capacite,
        disponibilite: {
          create: disponibilite.map(
            (dispo: Disponibilite & { time: Time[] }) => ({
              day: dispo.day,
              times: {
                create: dispo.time.map((t: Time) => ({
                  start: t.start,
                  end: t.end,
                })),
              },
            })
          ),
        },
      },
    });
    return NextResponse.json({ message: "created room", room });
  }
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

  // Reload the page after deleting the room

  return NextResponse.json({});
};
