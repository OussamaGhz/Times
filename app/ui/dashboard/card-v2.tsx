import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

import React from "react";

type Task = {
  title: string;
  color: string;
  icon: JSX.Element;
};

const CardV2 = (content: Task) => {
  console.log(content);

  return (
    <Link href="/dashboard" className="hover:scale-105 hover:shadow-lg transition-transform duration-300">
      <Card
        className={`rounded-[16px] ${content.color} max-w-[360px] min-h-[180px] relative text-wrap`}
      >
        <CardContent className="z-50 py-5 flex flex-col gap-2">
          <div className="text-[22px] font-semibold text-white">
            {content.title}
          </div>
          <div className="flex justify-end">{content.icon}</div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CardV2;
