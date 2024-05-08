"use client";

import React, { useEffect, useState } from "react";
import PageContainer from "@/app/ui/dashboard/page-container";
import { columns } from "@/app/ui/salles/columns";
import { DataTable } from "@/app/ui/salles/data-table";
import AddRommModal from "@/app/ui/salles/add-room-modal";

const useRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRooms = async () => {
      const response = await fetch("/api/room");
      const data = await response.json();
      setRooms(data);
      setLoading(false);
    };

    fetchRooms();
  }, []);

  return { rooms, loading };
};

const EnseignantsPage = () => {
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
      disponibilite: room.disponibilite.map((dispo: any) => {
        return {
          day: dispo.day,
          time: dispo.times.map((time: any) => {
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

          {<DataTable columns={columns} data={data ? data : []} />}
        </div>
      </PageContainer>
    </>
  );
};

export default EnseignantsPage;
