import PageContainer from "@/app/ui/dashboard/page-container";
import React from "react";
import { Teacher, columns } from "@/app/ui/enseignants/columns";
import { DataTable } from "@/app/ui/enseignants/data-table";

async function getData(): Promise<Teacher[]> {
  // Fetch data from your API here.
  return [
    { id: "1", nom: "Alice Johnson", email: "alice.johnson@example.com", grade: "A+", phone: "+1234567890" },
    { id: "2", nom: "Bob Smith", email: "bob.smith@example.com", grade: "B-", phone: "+1234567891" },
    { id: "3", nom: "Carol White", email: "carol.white@example.com", grade: "A", phone: "+1234567892" },
    { id: "4", nom: "David Brown", email: "david.brown@example.com", grade: "C+", phone: "+1234567893" },
    { id: "5", nom: "Eve Davis", email: "eve.davis@example.com", grade: "B+", phone: "+1234567894" },
    { id: "1", nom: "Alice Johnson", email: "alice.johnson@example.com", grade: "A+", phone: "+1234567890" },
    { id: "2", nom: "Bob Smith", email: "bob.smith@example.com", grade: "B-", phone: "+1234567891" },
    { id: "3", nom: "Carol White", email: "carol.white@example.com", grade: "A", phone: "+1234567892" },
    { id: "4", nom: "David Brown", email: "david.brown@example.com", grade: "C+", phone: "+1234567893" },
    { id: "5", nom: "Eve Davis", email: "eve.davis@example.com", grade: "B+", phone: "+1234567894" },
    { id: "1", nom: "Alice Johnson", email: "alice.johnson@example.com", grade: "A+", phone: "+1234567890" },
    { id: "2", nom: "Bob Smith", email: "bob.smith@example.com", grade: "B-", phone: "+1234567891" },
    { id: "3", nom: "Carol White", email: "carol.white@example.com", grade: "A", phone: "+1234567892" },
    { id: "4", nom: "David Brown", email: "david.brown@example.com", grade: "C+", phone: "+1234567893" },
    { id: "5", nom: "Eve Davis", email: "eve.davis@example.com", grade: "B+", phone: "+1234567894" },
    { id: "1", nom: "Alice Johnson", email: "alice.johnson@example.com", grade: "A+", phone: "+1234567890" },
    { id: "2", nom: "Bob Smith", email: "bob.smith@example.com", grade: "B-", phone: "+1234567891" },
    { id: "3", nom: "Carol White", email: "carol.white@example.com", grade: "A", phone: "+1234567892" },
    { id: "4", nom: "David Brown", email: "david.brown@example.com", grade: "C+", phone: "+1234567893" },
    { id: "5", nom: "Eve Davis", email: "eve.davis@example.com", grade: "B+", phone: "+1234567894" },
    { id: "1", nom: "Alice Johnson", email: "alice.johnson@example.com", grade: "A+", phone: "+1234567890" },
    { id: "2", nom: "Bob Smith", email: "bob.smith@example.com", grade: "B-", phone: "+1234567891" },
    { id: "3", nom: "Carol White", email: "carol.white@example.com", grade: "A", phone: "+1234567892" },
    { id: "4", nom: "David Brown", email: "david.brown@example.com", grade: "C+", phone: "+1234567893" },
    { id: "5", nom: "Eve Davis", email: "eve.davis@example.com", grade: "B+", phone: "+1234567894" },
    { id: "1", nom: "Alice Johnson", email: "alice.johnson@example.com", grade: "A+", phone: "+1234567890" },
    { id: "2", nom: "Bob Smith", email: "bob.smith@example.com", grade: "B-", phone: "+1234567891" },
    { id: "3", nom: "Carol White", email: "carol.white@example.com", grade: "A", phone: "+1234567892" },
    { id: "4", nom: "David Brown", email: "david.brown@example.com", grade: "C+", phone: "+1234567893" },
    { id: "5", nom: "Eve Davis", email: "eve.davis@example.com", grade: "B+", phone: "+1234567894" },
  ];
}

const EnseignantsPage = async () => {
  const data = await getData();
  return (
    <PageContainer>
      <div className="flex flex-col">
        <h1 className="font-[600] text-[40px] text-left my-[50px] ">
        Enseignants
        </h1>
        <DataTable columns={columns} data={data}/>
      </div>
    </PageContainer>
  );
};

export default EnseignantsPage;
