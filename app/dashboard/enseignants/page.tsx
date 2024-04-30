import PageContainer from "@/app/ui/dashboard/page-container";
import React from "react";
import { Payment, columns } from "@/app/ui/enseignants/columns";
import { DataTable } from "@/app/ui/enseignants/data-table";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ];
}

const EnseignantsPage = async () => {
  const data = await getData();
  return (
    <PageContainer>
      <div className="flex flex-col">
        <h1 className="font-[600] text-[40px] text-left my-[50px] ">
          Dashboard
        </h1>
        <DataTable columns={columns} data={data}/>
      </div>
    </PageContainer>
  );
};

export default EnseignantsPage;
