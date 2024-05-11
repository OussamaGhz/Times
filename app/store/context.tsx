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
import { useRooms, useenseignant } from "../utils/fetchers";
import { Teacher } from "../ui/enseignants/columns";

export const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { enseignant, loading: loadingTeachers } = useenseignant();
  const { rooms, loading: loadingRooms } = useRooms();

  const dataTeachers: Teacher[] = enseignant.map((enseignant: Teacher) => {
    return {
      id: enseignant.id,
      nom: `${enseignant.nom} ${enseignant.prenom}`,
      email: enseignant.email,
      date_de_naissance: enseignant.date_de_naissance.toString(), // Update the type to string
      numero_de_telephone: enseignant.numero_de_telephone,
      prenom: enseignant.prenom,
      phone: enseignant.numero_de_telephone,
      grade: enseignant.grade,
    };
  });

  const dataSalles: any = rooms.map((room: any) => {
    return {
      id: room.id,
      nom_salle: room.nom,
      type_salle: room.type.charAt(0).toUpperCase() + room.type.slice(1),
      capacity: room.capacite,
      disponibilite: room.disponibilite,
    };
  });

  const teachersNmuber: number = dataTeachers.length;

  const amphitheaters: number = rooms.filter((room: any) =>
    room.nom.toLowerCase().includes("amphi")
  ).length;

  // calucule the number of rooms that have the types "td" or "tp" (check lower case)
  const classrooms: number = rooms.filter(
    (room: any) =>
      room.type.toLowerCase() === "td" || room.type.toLowerCase() === "tp"
  ).length;

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
    setTeachers(dataTeachers.length);
  }, [dataTeachers]);

  const updateAmphi = (newAmphi: number) => {
    setAmphi(newAmphi);
  };

  const updateClassValue = (newClassValue: number) => {
    setClassValue(newClassValue);
  };

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
