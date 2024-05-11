"use client";
import { teacherData } from "@/prisma/teacher-data";
import { PrismaClient } from "@prisma/client";
import React, { useState } from "react";

const prisma = new PrismaClient();
const Page = async () => {
  const [fech, setFetch] = useState([]);
  const rooms = await prisma.room.findMany({
    select: {
      id: true,
      nom: true,
      type: true,
      capacite: true,
      disponibilite: true,
    },
  });
  const enseignants = await prisma.professor.findMany();
  const data = await prisma.annee.findMany({
    include: {
      specialites: {
        include: {
          sections: {
            include: {
              groupes: true,
              modules: true,
            },
          },
        },
      },
    },
  });
  const rooms_requst = rooms.map((room) => {
    return {
      name: room.nom,
      type: room.type,
      availability: room.disponibilite,
    };
  });
  const profs_request = enseignants.map((prof) => {
    return {
      name: prof.nom,
      modules: prof.modules.map((module, index) => {
        return {
          priority: index + 1,
          name: module,
        };
      }),
      availability: prof.availability_prof,
    };
  });
  const allSections: ({
    modules: {
      id: string;
      nom_module: string;
      nb_cours: number | null;
      td: boolean;
      tp: boolean;
      sectionId: string;
    }[];
    groupes: { id: string; nom: string; sectionId: string }[];
  } & {
    id: string;
    nom: string;
    specialiteId: string;
    annee: number;
    capacite: number | null;
  })[] = [];
  data.forEach((annee) => {
    annee.specialites.forEach((specialite) => {
      allSections.push(...specialite.sections);
    });
  });
  const extractedData = allSections.map((section) => {
    return {
      name: section.nom,
      groups: section.groupes.map((groupe) => groupe.nom),
      schedule: [],
      capacity: 100,
      modules: [
        {
          modules: section.modules.map((module) => ({
            moduleName: module.nom_module,
            lectures: module.nb_cours || 0,
            td: module.td,
            tp: module.tp,
          })),
        },
      ],
    };
  });
  const finalData = {
    rooms: rooms_requst,
    teachers: profs_request,
    sections: extractedData,
  };

  try {
    const response = await fetch(
      "https://mojnx.pythonanywhere.com/generate-schedule",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalData),
      }
    );
    console.log(response.status);
    const data = await response.json();
    console.log(data);
    
    await setFetch(data);
  } catch (error) { 
    console.log(error);
  }

  return (
    <div>
      {/* display the data on the page in json */}
      <pre>{JSON.stringify(fech, null, 2)}</pre>
      <p>
        -----------------------------------------------------------------------------------------
      </p>
    </div>
  );
};

export default Page;
