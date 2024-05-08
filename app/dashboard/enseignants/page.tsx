"use client";
import PageContainer from "@/app/ui/dashboard/page-container";
import React, { useEffect, useState } from "react";
import { Teacher, columns } from "@/app/ui/enseignants/columns";
import { DataTable } from "@/app/ui/enseignants/data-table";

import AddUser from "@/app/ui/enseignants/add_user-modal";
import { date } from "zod";

const useenseignant = () => {
  const [enseignant, setenseignant] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchenseignant = async () => {
      const response = await fetch("/api/prof");
      const data = await response.json();
      setenseignant(data);
      setLoading(false);
    };

    fetchenseignant();
  }, []);

  return { enseignant, loading };
};

const EnseignantsPage = () => {
  const { enseignant, loading } = useenseignant();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-2xl font-bold">Loading...</div>
      </div>
    );
  }
  const data: Teacher[] = enseignant.map((enseignant: Teacher) => {
    return {
      id: enseignant.id,
      nom: `${enseignant.nom} ${enseignant.prenom}`,
      email: enseignant.email,
      date_de_naissance: enseignant.date_de_naissance.toString(), // Update the type to string
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
