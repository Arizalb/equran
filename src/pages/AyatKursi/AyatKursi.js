// src/pages/AyatKursi.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AyatKursi.css";

const AyatKursi = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://islamic-api-zhirrr.vercel.app/api/ayatkursi")
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.error(
          "There was an error fetching the Ayat Kursi data!",
          error
        );
      });
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container ayat-kursi-container my-4 py-4">
      <h2 className="mb-4">Ayat Kursi</h2>
      <p>{data.translation}</p>
      <p className="arabic">{data.arabic}</p>
      <p>{data.latin}</p>
      <h3>Tafsir</h3>
      <p>{data.tafsir}</p>
    </div>
  );
};

export default AyatKursi;
