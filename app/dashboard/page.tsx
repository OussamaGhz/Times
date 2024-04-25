import React from "react";
import CardC from "../ui/dashboard/card";
import PageContainer from "../ui/dashboard/page-container";
import MiniTable from "../ui/dashboard/mini-table";
import Stars from "../ui/icon/stars";
import CardV2 from "../ui/dashboard/card-v2";
import Teacherv2 from "../ui/icon/teacherv2";
import Room from "../ui/icon/room";

const DashboardPage = () => {
  type PageContent = {
    title: string;
    detials: string;
    value: string;
    color: string;
  }[];

  type Task = {
    title: string;
    color: string;
    icon: JSX.Element;
  }[];

  const pageContent: PageContent = [
    {
      title: "Total Des Enseignants:",
      detials: "Enseignants",
      value: "256", // get from api
      color: "bg-[linear-gradient(90deg,_#70B0FF_0%,_#0072FF_100%)]",
    },
    {
      title: "Total De Salles:",
      detials: "Salles",
      value: "541", // get from api
      color: "bg-[linear-gradient(90deg,_#FFC837_0%,_#FF8008_100%)]",
    },
    {
      title: "Total Des Amphis:",
      detials: "Amphis",
      value: "96", // get from api
      color: "bg-[linear-gradient(90deg,_#7DC79A_0%,_#1D976C_100%)]",
    },
    {
      title: "Total De Sections:",
      detials: "Sections",
      value: "96", // get from api
      color: "bg-[linear-gradient(90deg,_#7986FC_0%,_#2A45D1_100%)]",
    },
  ];

  const tasks: Task = [
    {
      title: "Generation des Emplois de temps:",
      color: "bg-[linear-gradient(180deg,_#A93BFF_0%,_#8834FF_100%)]",
      icon: <Stars />,
    },
    {
      title: "Modifier les enseignants:",
      color:
        "bg-[linear-gradient(137deg,_#6C72FF_5.39%,_#484FFF_49.18%,_#8F00FF_87.04%,_#8F00FF_87.04%)]",
      icon: <Teacherv2 />,
    },
    {
      title: "Modifier les Salles:",
      color: "bg-[linear-gradient(180deg,_#3A85FF_0%,_#0062FF_100%)]",
      icon: <Room />,
    },
  ];

  return (
    <PageContainer>
      <div>
        <h1 className="font-semibold text-4xl text-left my-[50px] ">
          Dashboard
        </h1>
        <div className="flex gap-7 flex-col lg:flex-row justify-between items-center w-full">
          <div className="w-2/3 ">
            <div className="grid lg:grid-cols-2 lg:grid-rows-2 grid-cols-1 grid-rows-1 gap-7">
              {pageContent.slice(0, 4).map((content) => (
                <CardC
                  title={content.title}
                  detials={content.detials}
                  value={content.value}
                  color={content.color}
                />
              ))}
            </div>
          </div>
          <div className="w-1/3 ">
            <MiniTable />
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-semibold text-4xl text-left my-[50px] ">Tasks</h1>
        <div className="flex gap-7 flex-col lg:flex-row justify-center items-center">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-7 ">
            {tasks.map((content) => (
              <CardV2
                title={content.title}
                color={content.color}
                icon={content.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default DashboardPage;
