"use client";
import { createContext, useContext, useState } from "react";

// Define the shape of your context data
interface AppContextData {
  sections: number;
  teachers: number;
  amphi: number;
  classValue: number;
  updateAmphi: (value: number) => void;
  updateClassValue: (value: number) => void;
}

// Create a new context instance
const AppContext = createContext<AppContextData | undefined>(undefined);

// Create a custom hook to access the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};

// Create a provider component to wrap your app with
import React from "react";
import { useRooms, useSection, useenseignant } from "../utils/fetchers";
import { Annee, Section, Specialite } from "@prisma/client";

export const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { enseignant: teachers_all, loading: loadingTeachers } =
    useenseignant();
  const { rooms, loading: loadingRooms } = useRooms();

  const { section, loading } = useSection();
  // Define your state and any other logic here
  const [amphi, setAmphi] = React.useState(0);
  const [classValue, setClassValue] = React.useState(0);
  const [sections, setSections] = React.useState(0); // Add this line
  const [teachers, setTeachers] = React.useState(0);

  React.useEffect(() => {
    const amphitheaters: number = rooms.filter((room: any) =>
      room.nom.toLowerCase().includes("amphi")
    ).length;

    const classrooms: number = rooms.filter(
      (room: any) =>
        room.type.toLowerCase() === "td" || room.type.toLowerCase() === "tp"
    ).length;

    setAmphi(amphitheaters);
    setClassValue(classrooms);
  }, [rooms]);

  React.useEffect(() => {
    setTeachers(teachers_all.length);
  }, [teachers_all]);

  const updateAmphi = (newAmphi: number) => {
    setAmphi(newAmphi);
  };

  const updateClassValue = (newClassValue: number) => {
    setClassValue(newClassValue);
  };

  React.useEffect(() => {
    const allSections: Section[] = [];

    section.forEach((annee: Annee & { specialites?: Specialite[] }) => {
      if (annee.specialites) {
        annee.specialites.forEach(
          (specialite: Specialite & { sections?: Section[] }) => {
            // Update the type of specialite
            if (specialite.sections) {
              allSections.push(...specialite.sections);
            }
          }
        );
      }
    });

    setSections(allSections.length);
  }, [section]);

  return (
    <AppContext.Provider
      value={{
        amphi,
        classValue,
        updateAmphi,
        updateClassValue,
        sections,
        teachers,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
