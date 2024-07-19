import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./SuratDetail.css";

const SuratDetail = () => {
  const { nomor } = useParams();
  const [surat, setSurat] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSurat = async () => {
      try {
        const response = await fetch(`https://equran.id/api/v2/surat/${nomor}`);
        const result = await response.json();
        setSurat(result.data);
      } catch (error) {
        console.error("Error fetching surat:", error);
      }
    };

    fetchSurat();
  }, [nomor]);

  if (!surat) {
    return <div>Loading...</div>;
  }

  const handleNavigate = (suratNomor) => {
    navigate(`/surat/${suratNomor}`);
  };

  return (
    <div className="container">
      <h1>
        {surat.namaLatin} ({surat.nama})
      </h1>
      <div className="m-4 justify-content-center text-start">
        <p>Jumlah Ayat : {surat.jumlahAyat}</p>
        <p>Tempat Turun : {surat.tempatTurun}</p>
        <p>Arti : {surat.arti}</p>
        <p dangerouslySetInnerHTML={{ __html: surat.deskripsi }}></p>
      </div>

      <h2>Ayat</h2>
      <ul className="list-group">
        {surat.ayat.map((ayat) => (
          <li key={ayat.nomorAyat} className="list-group-item">
            <p className="text-end fs-1 text fw-bold">{ayat.teksArab}</p>
            <p className="text-center">{ayat.teksLatin}</p>
            <p className="text-start">{ayat.teksIndonesia}</p>
          </li>
        ))}
      </ul>

      <h2 className="my-3 py-3">Audio Full</h2>
      <ul className="list-group">
        {Object.entries(surat.audioFull).map(([key, value]) => (
          <li key={key} className="list-group-item">
            <audio controls>
              <source src={value} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          </li>
        ))}
      </ul>

      {surat.suratSebelumnya && (
        <div className="beforesurat m-4">
          <h3>Surat Sebelumnya</h3>
          <p>{surat.suratSebelumnya.namaLatin}</p>
          <button
            className="btn btn-secondary"
            onClick={() => handleNavigate(surat.suratSebelumnya.nomor)}
          >
            Surat {surat.suratSebelumnya.namaLatin}
          </button>
        </div>
      )}

      {surat.suratSelanjutnya && (
        <div className="nextsurat m-4">
          <h3>Surat Selanjutnya</h3>
          <p>{surat.suratSelanjutnya.namaLatin}</p>
          <button
            className="btn btn-dark"
            onClick={() => handleNavigate(surat.suratSelanjutnya.nomor)}
          >
            Baca {surat.suratSelanjutnya.namaLatin}
          </button>
        </div>
      )}
    </div>
  );
};

export default SuratDetail;
