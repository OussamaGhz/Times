import PageContainer from "@/app/ui/dashboard/page-container";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import React from "react";

const DetailPage = () => {
  return (
    <PageContainer>
      <h1 className="font-[600] text-[40px] text-left">Profil Enseignant</h1>
      <div className="flex flex-col gap-7">
        <div className="bg-white w-full">
          <Avatar>
            <AvatarFallback className="w-full h-full rounded-full flex items-center justify-center bg-[#4A58EC] text-white font-bold text-sm uppercase">
              A
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="bg-white w-full">
          <h1 className="font-[600] text-[30px] text-left">
            Profil Enseignant
          </h1>
          <div className="flex">
            <div>
              <span className="font-[600] text-[20px]">Nom:</span>
              <span>Abderrahmane</span>
            </div>
            <div>
              <span className="font-[600] text-[20px]">Prénom:</span>
              <span>Abderrahmane</span>
            </div>
          </div>
          <div>
            <div>
              <span className="font-[600] text-[20px]">Nom:</span>
              <span>Abderrahmane</span>
            </div>
            <div>
              <span className="font-[600] text-[20px]">Prénom:</span>
              <span>Abderrahmane</span>
            </div>
          </div>
          <div>
            <div>
              <span className="font-[600] text-[20px]">Nom:</span>
              <span>Abderrahmane</span>
            </div>
            <div>
              <span className="font-[600] text-[20px]">Prénom:</span>
              <span>Abderrahmane</span>
            </div>
          </div>
          <div>
            <div>
              <span className="font-[600] text-[20px]">Nom:</span>
              <span>Abderrahmane</span>
            </div>
            <div>
              <span className="font-[600] text-[20px]">Prénom:</span>
              <span>Abderrahmane</span>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default DetailPage;
