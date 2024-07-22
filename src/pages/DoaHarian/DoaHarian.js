// src/pages/DoaHarian.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./DoaHarian.css";

function DoaHarian() {
  const [doaData, setDoaData] = useState([]);

  useEffect(() => {
    const fetchDoaData = async () => {
      try {
        const response = await axios.get(
          "https://islamic-api-zhirrr.vercel.app/api/doaharian"
        );
        setDoaData(response.data.data);
      } catch (error) {
        console.error("Error fetching doa data", error);
      }
    };
    fetchDoaData();
  }, []);

  return (
    <div className="container my-4 py-4">
      <h2 className="mb-4">Doa Harian</h2>
      {doaData.map((item, index) => (
        <div key={index} className="doa-item mb-3">
          <h4>{item.title}</h4>
          <p className="arabic">{item.arabic}</p>
          <p>
            <em>{item.latin}</em>
          </p>
          <p>{item.translation}</p>
        </div>
      ))}
    </div>
  );
}

export default DoaHarian;
