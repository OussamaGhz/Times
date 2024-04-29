import React from "react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { ChevronLeftCircleIcon } from "lucide-react";
import maninsuit from "@/app/assets/man-in-suit.png";
import LeftArrow from "../icon/left-arrow";

const MiniTable = () => {
  return (
    <div className="w-full h-full">
      <Card className="max-w-[360px] p-5 rounded-[16px] min-h-[352px] text-[#001D74]">
        <h2 className="text-2xl font-semibold mb-4">Nos Enseignants:</h2>
        <ul className="flex flex-col gap-3">
          {
            [1, 2, 3, 4].map((item) => {
              // Added opening curly brace here
              return (
                <li className="flex items-center mb-3">
                  <Avatar className="mr-3">
                    <AvatarImage
                      alt="Tarek Garici"
                      src="@/app/assets/man-in-suit.png"
                    />
                  </Avatar>
                  <div className="flex-grow">
                    <div className="font-medium">Tarek Garici</div>
                    <div className="text-sm text-gray-500">#5541</div>
                  </div>
                  <LeftArrow />
                </li>
              );
            }) // Added closing parenthesis and curly brace here
          }
        </ul>
      </Card>
    </div>
  );
};

export default MiniTable;
