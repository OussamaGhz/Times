import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import LeftArrow from "../icon/left-arrow";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { Skeleton } from "@/components/ui/skeleton";

type Teacher = {
  id: string;
  email: string;
  nom: string;
  prenom: string;
};

const MiniTable = ({
  teacherList,
  isLoading,
}: {
  teacherList: Teacher[];
  isLoading: boolean;
}) => {
  console.log(isLoading);

  return (
    <div className="w-full h-full">
      <Card className="max-w-[360px] p-5 rounded-[16px] min-h-[352px] text-[#001D74]">
        <h2 className="text-2xl font-semibold mb-4">Nos Enseignants:</h2>
        <ul className="flex flex-col gap-3">
          {isLoading
            ? teacherList.map((_, index) => (
                <li key={index} className="flex items-center mb-3 gap-3">
                  <Skeleton className="h-8 w-8 rounded-full bg-gray-300" />
                  <div className="flex-grow">
                    <Skeleton className="h-4 w-[150px] mb-1 bg-gray-300" />
                    <Skeleton className="h-4 w-[100px] bg-gray-300" />
                  </div>
                  <Skeleton className="h-4 w-4 bg-gray-300" />
                </li>
              ))
            : teacherList.map((item) => (
                <li key={item.id} className="flex items-center mb-3 gap-3">
                  <Avatar className="w-8 h-8 rounded-full">
                    <AvatarFallback className="w-full h-full rounded-full flex items-center justify-center bg-[#4A58EC] text-white font-bold text-sm uppercase">
                      {item.nom.charAt(0)}
                      {item.prenom.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-grow">
                    <div className="font-medium">
                      {item.nom} {item.prenom}
                    </div>
                    <div className="text-sm text-gray-500">
                      #{item.id.slice(-5)}
                    </div>
                  </div>
                  <LeftArrow />
                </li>
              ))}
        </ul>
      </Card>
    </div>
  );
};

export default MiniTable;
