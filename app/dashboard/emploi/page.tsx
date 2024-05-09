"use client";

import { useState, useEffect } from "react";
import Calendar from "@/app/ui/calendar";
import PageContainer from "@/app/ui/dashboard/page-container";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Specialty {
  id: string;
  label: string;
  timetable: { slot: number; time: string; info: string }[];
}

interface SectionsData {
  [key: string]: Specialty[];
}

const ParentComponent = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("");
  const [selectedSection, setSelectedSection] = useState<string>("");
  const [infoData, setInfoData] = useState<
    { slot: number; time: string; info: string }[]
  >([]);

  // Sample data for university specialties
  const specialtiesData = [
    { id: "specialty1", label: "Computer Science" },
    { id: "specialty2", label: "Engineering" },
    // Add more specialties as needed
  ];

  // Sample data for sections (dependent on the selection from the specialties)
  const sectionsData: SectionsData = {
    specialty1: [
      {
        id: "section1",
        label: "Section A - Computer Science",
        timetable: [
          { slot: 1, time: "8:00 - 9:30", info: "Info for Slot 1" },
          { slot: 2, time: "9:40 - 11:10", info: "Info for Slot 2" },
          // Add more slots as needed
        ],
      },
      {
        id: "section2",
        label: "Section B - Computer Science",
        timetable: [
          { slot: 1, time: "8:30 - 10:00", info: "Info for Slot 1" },
          { slot: 2, time: "10:10 - 11:40", info: "Info for Slot 2" },
          // Add more slots as needed
        ],
      },
      // Add more sections as needed
    ],
    specialty2: [
      {
        id: "section3",
        label: "Section C - Engineering",
        timetable: [
          { slot: 1, time: "9:00 - 10:30", info: "Info for Slot 1" },
          { slot: 2, time: "10:40 - 12:10", info: "Info for Slot 2" },
          // Add more slots as needed
        ],
      },
      {
        id: "section4",
        label: "Section D - Engineering",
        timetable: [
          { slot: 1, time: "9:30 - 11:00", info: "Info for Slot 1" },
          { slot: 2, time: "11:10 - 12:40", info: "Info for Slot 2" },
          // Add more slots as needed
        ],
      },
      // Add more sections as needed
    ],
    // Add more specialties and corresponding sections as needed
  };

  // Handle change in the specialty selector
  const handleSpecialtyChange = (selectedSpecialty: string) => {
    setSelectedSpecialty(selectedSpecialty);
    setSelectedSection(""); // Reset the section when the specialty changes
  };

  // Handle change in the section selector
  const handleSectionChange = (selectedSection: string) => {
    setSelectedSection(selectedSection);
  };

  // Update info data based on selected section
  useEffect(() => {
    if (selectedSection) {
      const selectedSectionData = sectionsData[selectedSpecialty]?.find(
        (section: Specialty) => section.id === selectedSection
      );
      if (selectedSectionData) {
        setInfoData(selectedSectionData.timetable);
      }
    }
  }, [selectedSection]);

  return (
    <PageContainer>
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <div className="flex flex-col  my-[30px] ">
            <h1 className="font-[600] text-[40px] text-left">
              Emplois du temps
            </h1>
            {selectedSection !== "" ? (
              selectedSpecialty !== "" && (
                <p className="text-blue-950 text-base font-semibold ">
                  {specialtiesData.map((s) => {
                    // select the speicality lable where the id is equal to the selectedSpecialty
                    if (s.id === selectedSpecialty) {
                      return s.label;
                    }
                  })}
                  {""} / {""}
                  {sectionsData[selectedSpecialty]?.map((s) => {
                    // select the section lable where the id is equal to the selectedSection
                    if (s.id === selectedSection) {
                      return s.label;
                    }
                  })}
                </p>
              )
            ) : (
              <p className="text-blue-950 text-base font-semibold ">
                Select a Specialty and a Section
              </p>
            )}
          </div>

          <div className="flex gap-4">
            <Select
              onValueChange={(value) => handleSpecialtyChange(value)}
              value={selectedSpecialty}
            >
              <SelectTrigger className=" bg-[#4A58EC] text-white text-lg  font-semibold">
                <SelectValue placeholder="Select a Specialty" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Specialty</SelectLabel>
                  {specialtiesData.map(({ id, label }) => (
                    <SelectItem key={id} value={id}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select
              onValueChange={(value) => handleSectionChange(value)}
              value={selectedSection}
            >
              <SelectTrigger className="w-[180px] bg-[#4A58EC] text-white">
                <SelectValue placeholder="Select a Section" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Section</SelectLabel>

                  {sectionsData[selectedSpecialty]?.map(({ id, label }) => (
                    <SelectItem key={id} value={id}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div>
          <Calendar
            info={infoData.map(({ time, info }) => `${time}: ${info}`)}
          />
        </div>
      </div>
    </PageContainer>
  );
};

export default ParentComponent;
