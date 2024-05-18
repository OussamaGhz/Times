import { Clock1Icon, MoreHorizontal } from "lucide-react";
import React from "react";

const TD = () => {
  return (
    <div className="w-full h-[45px] bg-[#FFF1EF] text-[#FD750F] flex flex-col justify-center p-2 overflow-hidden rounded-lg my-1">
      <span className="flex items-center justify-between text-xs truncate font-bold ">
        <span className="flex items-center gap-1">
          <Clock1Icon width={12} />
          <span className="w-20 truncate">TD TH Graph - Groupe 1</span>
        </span>

        <MoreHorizontal />
      </span>
      <span className="truncate text-xs">Salle 457 - Abdelli</span>
    </div>
  );
};

export default TD;
