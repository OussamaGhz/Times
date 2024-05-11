"use client";

import React, { useEffect, useState } from "react";
import { Annee, Specialite, Section } from "./types"; // Importing the types

const useSection = () => {
  const [section, setSection] = useState<Annee[]>([]); // Annotating the state variable with Annee[]
  const [loading, setLoading] = useState<boolean>(true); // Annotating the state variable with boolean

  useEffect(() => {
    const fetchRooms = async () => {
      const response = await fetch("/api/years");
      const data = await response.json(); // Annotating the returned data with Annee[]

      setSection(data);
      setLoading(false);
    };

    fetchRooms();
  }, []);

  return { section, loading };
};

const SectionsPage = () => {
  const { section, loading } = useSection();

  const allSections: Section[] = [];

  section.forEach((annee: Annee) => {
    if (annee.specialites) {
      annee.specialites.forEach((specialite: Specialite) => {
        if (specialite.sections) {
          allSections.push(...specialite.sections);
        }
      });
    }
  });

  const extractedData = allSections.map((section: Section) => {
    return {
      name: section.nom,
      year: section.annee,
      speciality: section.specialite_name,
      groups: (section.groupes ?? []).map((groupe) => groupe.nom),
      schedule: [],
      capacity: 100,
      modules: (section.modules ?? []).map((module) => ({
        moduleName: module.nom_module,
        lectures: module.nb_cours || 0,
        td: module.td,
        tp: module.tp,
      })),
    };
  });

  console.log(extractedData);

  return <div></div>;
};

export default SectionsPage;
