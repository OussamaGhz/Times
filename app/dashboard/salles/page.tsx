"use client";

import React, { useEffect, useState } from "react";
import PageContainer from "@/app/ui/dashboard/page-container";
import { columns } from "@/app/ui/salles/columns";
import { DataTable } from "@/app/ui/salles/data-table";
import AddRommModal from "@/app/ui/salles/add-room-modal";
import { useAppContext } from "@/app/store/context";
import { useRooms } from "@/app/utils/fetchers";

//caluculate the rooms with type amphi (check lower case)

const SallesPage = () => {
  const { rooms, loading } = useRooms();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-2xl font-bold">Loading...</div>
      </div>
    );
  }

  const data: any = rooms.map((room: any) => {
    return {
      id: room.id,
      nom_salle: room.nom,
      type_salle: room.type.charAt(0).toUpperCase() + room.type.slice(1),
      capacity: room.capacite,
      disponibilite: room.disponibilite,
    };
  });

  // calculate the number of rooms that contains of its names the word amphi (check lower case)
  const amphitheaters: number = rooms.filter((room: any) =>
    room.nom.toLowerCase().includes("amphi")
  ).length;

  // calucule the number of rooms that have the types "td" or "tp" (check lower case)
  const classrooms: number = rooms.filter(
    (room: any) =>
      room.type.toLowerCase() === "td" || room.type.toLowerCase() === "tp"
  ).length;

  //store both variables on the context
  // const { updateAmphi, updateClassValue } = useAppContext();

  // updateAmphi(amphitheaters);
  // updateClassValue(classrooms);

  // assign the calculated values to the context

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

          {<DataTable columns={columns} data={data ? data : []} />}
        </div>
      </PageContainer>
    </>
  );
};

export default SallesPage;
