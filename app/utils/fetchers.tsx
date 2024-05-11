"use client";

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

export const useenseignant = () => {
  const [enseignant, setenseignant] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchenseignant = async () => {
      const response = await fetch("/api/prof");
      const data = await response.json();
      setenseignant(data);
      setLoading(false);
    };

    fetchenseignant();
  }, []);

  return { enseignant, loading };
};
