"use client";
import React from "react";
import CardC from "../ui/dashboard/card";
import PageContainer from "../ui/dashboard/page-container";
import MiniTable from "../ui/dashboard/mini-table";
import Stars from "../ui/icon/stars";
import CardV2 from "../ui/dashboard/card-v2";
import Teacherv2 from "../ui/icon/teacherv2";
import Room from "../ui/icon/room";
import { useAppContext } from "../store/context";
import { useSession, getSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Loading from "../ui/icon/loading";

const DashboardPage = () => {
  const { data: session, status } = useSession();
  console.log(session);

  if (status === "unauthenticated") {
    redirect("/login");
  }

  const {
    sections,
    teachers,
    amphi,
    loading,
    classValue: salles,
    randomTeachers,
    loadingTeachers: isLoding,
  } = useAppContext();
  //turn the values to string
  const sectionsValue = sections.toString();
  const teachersValue = teachers.toString();
  const classValue = salles.toString();
  const amphiValue = amphi.toString();

  type PageContent = {
    title: string;
    detials: string;
    value: string;
    color: string;
  }[];

  type Task = {
    title: string;
    color: string;
    path: string;
    icon: JSX.Element;
  }[];

  const pageContent: PageContent = [
    {
      title: "Total Des Enseignants:",
      detials: "Enseignants",
      value: teachersValue, // get from api
      color: "bg-[linear-gradient(90deg,_#70B0FF_0%,_#0072FF_100%)]",
    },
    {
      title: "Total De Salles:",
      detials: "Salles",
      value: classValue, // get from api
      color: "bg-[linear-gradient(90deg,_#FFC837_0%,_#FF8008_100%)]",
    },
    {
      title: "Total Des Amphis:",
      detials: "Amphis",
      value: amphiValue,
      color: "bg-[linear-gradient(90deg,_#7DC79A_0%,_#1D976C_100%)]",
    },
    {
      title: "Total De Sections:",
      detials: "Sections",
      value: sectionsValue, // get from api
      color: "bg-[linear-gradient(90deg,_#7986FC_0%,_#2A45D1_100%)]",
    },
  ];

  const tasks: Task = [
    {
      title: "Generation des Emplois de temps:",
      color: "bg-[linear-gradient(180deg,_#A93BFF_0%,_#8834FF_100%)]",
      path: "/emploi-generation",
      icon: <Stars />,
    },
    {
      title: "Modifier les enseignants:",
      path: "/enseignants",
      color:
        "bg-[linear-gradient(137deg,_#6C72FF_5.39%,_#484FFF_49.18%,_#8F00FF_87.04%,_#8F00FF_87.04%)]",
      icon: <Teacherv2 />,
    },
    {
      title: "Modifier les Salles:",
      path: "/salles",
      color: "bg-[linear-gradient(180deg,_#3A85FF_0%,_#0062FF_100%)]",
      icon: <Room />,
    },
  ];

  return (
    <PageContainer>
      <>
        <div className="flex flex-col lg:flex-row gap-4 items-center">
          <h1 className="font-semibold text-2xl lg:text-4xl text-left my-4 lg:my-8">
            Dashboard
          </h1>
          {isLoding && <Loading color="fill-[#001D74]" />}
        </div>
        <div className="flex justify-center items-center"> 
        <div className="flex flex-col lg:flex-row gap-7 justify-between items-center w-full">
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              {pageContent.map((content, index) => (
                <CardC
                  key={index}
                  title={content.title}
                  detials={content.detials}
                  value={content.value}
                  color={content.color}
                />
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/3 flex justify-center h-full">
            <MiniTable teacherList={randomTeachers} isLoading={isLoding} />
          </div>
        </div>

        </div>

        
      </>
      <div className="">
        <h1 className="font-semibold text-2xl lg:text-4xl text-center lg:text-left my-4 lg:my-8">
          Tasks
        </h1>
        <div className="flex flex-col lg:flex-row gap-7 justify-center items-center w-full mb-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 w-full">
            {tasks.map((content, index) => (
              <div className="w-full">
                <CardV2
                  key={index}
                  path={content.path}
                  title={content.title}
                  color={content.color}
                  icon={content.icon}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default DashboardPage;
