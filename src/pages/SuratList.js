import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./SuratList.css";

const SuratList = () => {
  const [surat, setSurat] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://equran.id/api/v2/surat")
      .then((response) => {
        console.log("Data yang diterima dari API:", response.data);
        if (response.data && response.data.data) {
          setSurat(response.data.data);
        } else {
          console.error("Format data tidak sesuai.");
        }
      })
      .catch((error) => {
        console.error("Ada kesalahan dalam mengambil data:", error);
      });
  }, []);

  const handleSuratClick = (nomor) => {
    navigate(`/surat/${nomor}`);
  };

  return (
    <div className="container my-5">
      <h1 className="mb-4">Daftar Surat</h1>
      <div className="row">
        {Array.isArray(surat) && surat.length > 0 ? (
          surat.map((item) => (
            <div
              key={item.nomor}
              className="col-md-6 col-lg-4 mb-4"
              onClick={() => handleSuratClick(item.nomor)}
            >
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">
                    {item.namaLatin} ({item.nama})
                  </h5>
                  <p className="card-text">
                    <strong>Ayat:</strong> {item.jumlahAyat}
                    <br />
                    <strong>Tempat Turun:</strong> {item.tempatTurun}
                    <br />
                    <strong>Arti:</strong> {item.arti}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12">
            <p>Data surat tidak tersedia</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SuratList;
