import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AsmaulHusnaList.css";

const AsmaulHusnaList = () => {
  const [asmaulHusna, setAsmaulHusna] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.dikiotang.com/quran/asma")
      .then((response) => {
        console.log("Data yang diterima dari API:", response.data);
        if (response.data && response.data.data) {
          setAsmaulHusna(response.data.data);
        } else {
          console.error("Format data tidak sesuai.");
        }
      })
      .catch((error) => {
        console.error("Ada kesalahan dalam mengambil data:", error);
      });
  }, []);

  return (
    <div className="container my-5">
      <h1 className="mb-4">Asmaul Husna</h1>
      <div className="row">
        {Array.isArray(asmaulHusna) && asmaulHusna.length > 0 ? (
          asmaulHusna.map((item) => (
            <div key={item.id} className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">
                    {item.arab} ({item.latin})
                  </h5>
                  <p className="card-text">
                    <strong>Arti:</strong> {item.indo}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12">
            <p>Data Asmaul Husna tidak tersedia</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AsmaulHusnaList;
