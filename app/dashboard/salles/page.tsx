import PageContainer from "@/app/ui/dashboard/page-container";
import React from "react";
import { Room, columns } from "@/app/ui/salles/columns";
import { DataTable } from "@/app/ui/salles/data-table";

import { PrismaClient } from "@prisma/client";
import AddRommModal from "@/app/ui/salles/add-room-modal";

const prisma = new PrismaClient();

const EnseignantsPage = async () => {
  const rooms = await prisma.room.findMany({
    include: {
      disponibilite: {
        include: {
          times: true,
        },
      },
    },
  });

  const data: Room[] = rooms.map((room) => {
    return {
      id: room.id,
      nom_salle: room.nom,
      type_salle: room.type,
      capacity: room.capacite,
      disponibilite: room.disponibilite.map((dispo) => {
        return {
          day: dispo.day,
          time: dispo.times.map((time) => {
            return {
              start: time.start,
              end: time.end,
            };
          }),
        };
      }),
    };
  });

  return (
    <>
      <PageContainer>
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <h1 className="font-[600] text-[40px] text-left my-[30px] ">
              Salles
            </h1>
            <AddRommModal />
          </div>

          <DataTable columns={columns} data={data ? data : []} />
        </div>
      </PageContainer>
    </>
  );
};

export default EnseignantsPage;
