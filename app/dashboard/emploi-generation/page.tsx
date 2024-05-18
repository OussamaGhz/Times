"use client";

import { useAppContext } from "@/app/store/context";
import PageContainer from "@/app/ui/dashboard/page-container";
import StarIcon from "@/app/ui/icon/star-icon";
import Stars from "@/app/ui/icon/stars";
import generatePDF from "@/app/utils/generate-pdf";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { use, useEffect } from "react";
import { useState } from "react";

const GenerationPage = () => {
  const [schduleGenerated, setSchduleGenerated] = useState(null);
  const id = "schdule-generated";

  const updateHandler = () => {
    fetch("/api/configuration", {
      method: "PUT",
      body: JSON.stringify({ id, value: "true" }),
    });
  };

  const data = {
    name: "John Doe",
    speciality: "Computer Science",
    annee: 2024,
    schedule: [
      {
        slot: 1,
        time: "08:00 - 10:00",
        module: "Algorithms",
        teacher: "Prof. Smith",
      },
      {
        slot: 2,
        time: "10:00 - 12:00",
        module: "Data Structures",
        teacher: "Dr. Johnson",
      },
    ],
  };

  useEffect(() => {
    fetch(`/api/configuration`, {
      method: "POST",
      body: JSON.stringify({ id }),
    }).then((response) => {
      response.json().then((data) => {
        console.log(data);

        // setSchduleGenerated(data);
      });
    });
  }, []);

  const {
    teachers_all,
    rooms,
    section: sections,
    amphi,
    sections: nbSection,
    teachers: nbTeacher,
    classValue: nbClass,
  } = useAppContext();

  const nbTotal = nbClass + amphi;

  //  preapare data
  const rooms_requst = rooms.map((room) => ({
    name: room.nom,
    availability: room.disponibilite,
    type: room.type,
  }));

  const profs_request = teachers_all.map((teacher) => ({
    name: teacher.nom,
    modules: teacher.modules.map((module: any, index: number) => ({
      name: module, // assuming module is a string
      priority: index + 1, // ! should be changed after the data update
    })),
    availability: teacher.availability_prof,
  }));

  console.log(sections);

  const sections_request = sections.map((year) => {
    return {
      name: year.annee,
      specialites: year.specialites.map((specialite) => {
        return {
          name: specialite.nom,
          sections: specialite.sections.map((section) => {
            return {
              name: section.nom,
              groups: section.groupes,
              modules: section.modules.map((module) => ({
                moduleName: module.nom,
                lectures: module.lectures,
                td: module.td,
                tp: module.tp,
              })),
            };
          }),
        };
      }),
    };
  });

  const sucess_status = (
    <div className="bg-[#E3F8EF] rounded-[13.437px] w-full sm:w-[336.6px] h-[60.1px] flex justify-center items-center text-xl sm:text-[20.993px] text-[#0EB17F] my-6">
      Généré avec succès
    </div>
  );

  const alerte_status = (
    <div className="bg-[#FFF1EF] rounded-[13.437px] w-full sm:w-[336.6px] h-[60.1px] flex justify-center items-center text-xl sm:text-[20.993px] text-[#FD750F] my-6">
      Nécessite régénération
    </div>
  );

  return (
    <PageContainer>
      <h1 className="font-[600] text-[40px] text-left my-[30px] ">
        Génération Emploi du Temps
      </h1>
      <div className="bg-white w-full h-full py-5 px-4 sm:px-8 rounded-lg">
        <h1 className="font-semibold text-2xl sm:text-3xl text-left">
          Paramètres de génération
        </h1>
        <div className="flex flex-col w-full my-6 gap-6 sm:gap-8">
          <div className="flex flex-col sm:flex-row sm:gap-12 justify-center w-full">
            <div className="w-full sm:w-1/2 flex flex-col gap-4">
              <Label className="text-black text-lg">Nombre de salles</Label>
              <Input type="number" className="py-4" value={nbTotal} disabled />
            </div>
            <div className="w-full sm:w-1/2 flex flex-col gap-4">
              <Label className="text-black text-lg">Nombre de sections</Label>
              <Input
                type="number"
                className="py-4"
                value={nbSection}
                disabled
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-12 justify-center w-full">
            <div className="w-full sm:w-1/2 flex flex-col gap-4">
              <Label className="text-black text-lg">Nombre d’enseignants</Label>
              <Input
                type="number"
                className="py-4"
                value={nbTeacher}
                disabled
              />
            </div>
            <div className="w-full sm:w-1/2 flex flex-col gap-4">
              <Label className="text-black text-lg">
                Nombre de spécialités
              </Label>
              <Input type="number" className="py-4" value={"149"} disabled />
            </div>
          </div>
        </div>
        <h1 className="font-semibold text-2xl sm:text-3xl text-left">Status</h1>
        {alerte_status}

        <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
          <Button
            variant={"default"}
            className="bg-[linear-gradient(137deg,_#6C72FF_5.39%,_#484FFF_49.18%,_#8F00FF_87.04%,_#8F00FF_87.04%)] hover:bg-opacity-80 text-white font-semibold text-lg sm:text-[20px] py-2 px-4 rounded-[13.437px] w-full sm:w-32 h-12"
            onClick={() => generatePDF(data)}
          >
            Générer
          </Button>
          <Button
            variant={"default"}
            className="bg-[#0EB17F] text-white font-semibold hover:bg-opacity-80 text-lg sm:text-[18px] py-2 px-4 rounded-[13.437px] w-full sm:w-32 h-12"
            onClick={() => generatePDF(data)}
          >
            Télécharger
          </Button>
        </div>
      </div>
    </PageContainer>
  );
};

export default GenerationPage;
