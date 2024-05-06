import PageContainer from "@/app/ui/dashboard/page-container";
import React from "react";
import { Teacher, columns } from "@/app/ui/enseignants/columns";
import { DataTable } from "@/app/ui/enseignants/data-table";
import { PrismaClient } from "@prisma/client";


import AddUser from "@/app/ui/enseignants/add_user-modal";

const prisma = new PrismaClient();

const EnseignantsPage = async () => {
  const enseignants = await prisma.professor.findMany();

  const data: Teacher[] = enseignants.map((enseignant) => {
    return {
      id: enseignant.id,
      nom: `${enseignant.nom} ${enseignant.prenom}`,
      email: enseignant.email,
      date_de_naissance: enseignant.date_de_naissance.toISOString(), // Update the type to string
      numero_de_telephone: enseignant.numero_de_telephone,
      prenom: enseignant.prenom,
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
          <AddUser />
        </div>

        <DataTable columns={columns} data={data} />
      </div>
    </PageContainer>
  );
};

export default EnseignantsPage;
