import PageContainer from "@/app/ui/dashboard/page-container";
import React from "react";
import { Teacher, columns } from "@/app/ui/enseignants/columns";
import { DataTable } from "@/app/ui/enseignants/data-table";
import { Button } from "@/components/ui/button";
import PlusIcon from "@/app/ui/icon/plus-icon";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const EnseignantsPage = async () => {
  const enseignants = await prisma.professor.findMany();
  console.table(enseignants);

  const data: Teacher[] = enseignants.map((enseignant) => {
    return {
      id: enseignant.id,
      //combine nom and prenom
      nom: `${enseignant.nom} ${enseignant.prenom}`,
      email: enseignant.email,
      phone: enseignant.numero_de_telephone,
      grade: enseignant.grade,
    };
  });

  return (
    <PageContainer>
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <h1 className="font-[600] text-[40px] text-left my-[30px] ">
            Enseignants
          </h1>
          <Button
            variant="default"
            className="flex gap-2 px-[15px] py-[22px] max:w-56  text-white bg-[#4A58EC] rounded-[11px]"
          >
            <PlusIcon />
            <p>Add new enseignant</p>
          </Button>
        </div>

        <DataTable columns={columns} data={data} />
      </div>
    </PageContainer>
  );
};

export default EnseignantsPage;
