// src/pages/Tahlil.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Tahlil.css";

function Tahlil() {
  const [tahlilData, setTahlilData] = useState([]);

  useEffect(() => {
    const fetchTahlilData = async () => {
      try {
        const response = await axios.get(
          "https://islamic-api-zhirrr.vercel.app/api/tahlil"
        );
        setTahlilData(response.data.data);
      } catch (error) {
        console.error("Error fetching tahlil data", error);
      }
    };
    fetchTahlilData();
  }, []);

  return (
    <div className="container my-4 py-4">
      <h2 className="mb-4">Bacaan Tahlil</h2>
      {tahlilData.map((item) => (
        <div key={item.id} className="tahlil-item mb-3">
          <h4>{item.title}</h4>
          <p className="arabic">{item.arabic}</p>
          <p>{item.translation}</p>
        </div>
      ))}
    </div>
  );
}

export default Tahlil;
