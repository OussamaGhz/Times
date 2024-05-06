import PageContainer from "@/app/ui/dashboard/page-container";
import React from "react";
import { Room, columns } from "@/app/ui/salles/columns";
import { DataTable } from "@/app/ui/salles/data-table";
import { Button } from "@/components/ui/button";
import PlusIcon from "@/app/ui/icon/plus-icon";
import { PrismaClient } from "@prisma/client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
        return [...dispo.day];
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
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="default"
                  className="flex gap-2 px-[15px] py-[22px] max:w-56  text-white bg-[#4A58EC] rounded-[11px]"
                >
                  <PlusIcon />
                  Ajouter une salle
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[800px] bg-white">
                <DialogHeader>
                  <DialogTitle className="text-[28px] text-[#001D74]">
                    Ajouter une salle
                  </DialogTitle>
                </DialogHeader>
                <div className="py-[20px] text-black flex flex-col gap-6 text-left border-b-[1px] border-gray-200">
                  <div className="flex justify-between items-center gap-8">
                    <div className="flex flex-col w-[50%] text-left">
                      <Label className="text-[20.051px] font-[400] my-3">
                        Nom de la salle
                      </Label>
                      <Input className="w-full h-[52px]" />
                    </div>
                    <div className="flex flex-col w-[50%]">
                      <Label className="text-[20.051px] font-[400] my-3">
                        Type de la salle
                      </Label>
                      <Input className="w-full h-[52px]" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center gap-8">
                    <div className="flex flex-col w-[50%] text-left">
                      <Label className="text-[20.051px] font-[400] my-3">
                        Capacite
                      </Label>
                      <Input className="w-full h-[52px]" />
                    </div>
                    <div className="flex flex-col w-[50%]">
                      <Label className="text-[20.051px] font-[400] my-3">
                        Disponibilite
                      </Label>
                      <Input className="w-full h-[52px]" />
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit" className="text-white">
                    Sauvegarder
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <DataTable columns={columns} data={data} />
        </div>
      </PageContainer>
    </>
  );
};

export default EnseignantsPage;
