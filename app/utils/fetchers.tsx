"use client";

import { Annee } from "@prisma/client";
import { useEffect, useState } from "react";

export const useRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRooms = async () => {
      const response = await fetch("/api/room");
      const data = await response.json();
      setRooms(data);
      setLoading(false);
    };

    fetchRooms();
  }, []);

  return { rooms, loading };
};

export const useEnseignant = () => {
  const [enseignant, setEnseignant] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEnseignant = async () => {
      const response = await fetch("/api/prof");
      const data = await response.json();
      setEnseignant(data);
      setLoading(false);
    };

    fetchEnseignant();
  }, []);

  return { enseignant, loading };
};

export const useSection = () => {
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
