"use client";

import React, { use, useEffect } from "react";
import { useState } from "react";

const GenerationPage = async () => {
  const [schduleGenerated, setSchduleGenerated] = useState(null);
  const id = "schdule-generated";

  const updateHandler = async () => {
    await fetch("/api/configuration", {
      method: "PUT",
      body: JSON.stringify({ id, value: "true" }),
    });
  };

  useEffect(() => {
    fetch(`/api/configuration`, {
      method: "POST",
      body: JSON.stringify({ id }),
    }).then((response) => {
      response.json().then((data) => {
        console.log(data);

        // setSchduleGenerated(data);
      });
    });
  }, []);

  return (
    <div>
      <button onClick={updateHandler}>Genrate</button>
    </div>
  );
};

export default GenerationPage;
