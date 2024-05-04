import PageContainer from "@/app/ui/dashboard/page-container";
import React from "react";
import { Teacher, columns } from "@/app/ui/salles/columns";
import { DataTable } from "@/app/ui/salles/data-table";
import { Button } from "@/components/ui/button";
import PlusIcon from "@/app/ui/icon/plus-icon";

async function getData(): Promise<Teacher[]> {
  // Fetch data from your API here.
  return [
    { nom_salle: "Salle 101", type_salle: "Type A", capacity: 30 },
    { nom_salle: "Salle 102", type_salle: "Type B", capacity: 25 },
    { nom_salle: "Salle 103", type_salle: "Type A", capacity: 35 },
    { nom_salle: "Salle 104", type_salle: "Type B", capacity: 40 },
    { nom_salle: "Salle 105", type_salle: "Type A", capacity: 28 },
    { nom_salle: "Salle 106", type_salle: "Type B", capacity: 45 },
    { nom_salle: "Salle 107", type_salle: "Type A", capacity: 50 },
    { nom_salle: "Salle 108", type_salle: "Type B", capacity: 33 },
    { nom_salle: "Salle 109", type_salle: "Type A", capacity: 38 },
    { nom_salle: "Salle 110", type_salle: "Type B", capacity: 42 },
  ];
}
const EnseignantsPage = async () => {
  const data = await getData();
  return (
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
  );
};

export default EnseignantsPage;
