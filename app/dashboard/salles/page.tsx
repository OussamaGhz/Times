import PageContainer from "@/app/ui/dashboard/page-container";
import React, { useState } from "react";
import { Room, columns } from "@/app/ui/salles/columns";
import { DataTable } from "@/app/ui/salles/data-table";
import { Button } from "@/components/ui/button";
import PlusIcon from "@/app/ui/icon/plus-icon";
import { PrismaClient } from "@prisma/client";

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

  console.table(rooms);

  const data: Room[] = rooms.map((room) => {
    return {
      id: room.id,
      nom_salle: room.nom,
      type_salle: room.type,
      capacity: room.capacite,
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
            <Button
              variant="default"
              className="flex gap-2 px-[15px] py-[22px] max:w-56  text-white bg-[#4A58EC] rounded-[11px]"
            >
              <PlusIcon />
              <p>Add new salles</p>
            </Button>
          </div>

          <DataTable columns={columns} data={data} />
        </div>
      </PageContainer>
    </>
  );
};

export default EnseignantsPage;
