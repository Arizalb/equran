import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./SuratDetail.css";
import { Container } from "react-bootstrap";

const SuratDetail = () => {
  const { nomor } = useParams();
  const [surat, setSurat] = useState(null);
  const [showMushaf, setShowMushaf] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSurat = async () => {
      try {
        const response = await fetch(`https://equran.id/api/v2/surat/${nomor}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
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

  const toggleMushaf = () => {
    setShowMushaf((prevShowMushaf) => !prevShowMushaf);
  };

  const numbers = "٠١٢٣٤٥٦٧٨٩";
  const convert = (num) => {
    let res = "";
    const str = num.toString();
    for (let c of str) {
      res += numbers.charAt(c);
    }
    return res;
  };

  const renderMushaf = () => {
    return (
      <div className="mushaf-container">
        {nomor === "1" && (
          <h2 className="text-center">
            أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ
          </h2>
        )}
        {nomor !== "1" && (
          <h2 className="text-center">
            بِسْــــــــــــــــــمِ اللهِ الرَّحْمَنِ الرَّحِيمِ
          </h2>
        )}
        <div className="ayat-container">
          {surat.ayat.map((ayat) => (
            <span key={ayat.nomorAyat} className="ayat">
              {ayat.teksArab}
              <span className="ayat-number"> ({convert(ayat.nomorAyat)}) </span>
            </span>
          ))}
        </div>
      </div>
    );
  };

  const renderLengkap = () => {
    return (
      <ul className="list-group">
        {nomor === "1" && (
          <li className="list-group-item">
            <p className="text-end fs-1 text fw-bold">
              أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ
            </p>
          </li>
        )}
        {nomor !== "1" && (
          <li className="list-group-item">
            <p className="text-end fs-1 text fw-bold">
              بِسْــــــــــــــــــمِ اللهِ الرَّحْمَنِ الرَّحِيمِ
            </p>
          </li>
        )}
        {surat.ayat.map((ayat) => (
          <li key={ayat.nomorAyat} className="list-group-item">
            <div className="d-flex justify-content-between">
              <span className="badge bg-dark rounded-pill">
                {convert(ayat.nomorAyat)}
              </span>
              <p className="text-end fs-1 text fw-bold">{ayat.teksArab}</p>
            </div>
            <p className="text-center">{ayat.teksLatin}</p>
            <p className="text-start">{ayat.teksIndonesia}</p>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center my-4">
        {surat.suratSebelumnya && (
          <button
            className="btn btn-secondary btn-sm d-flex align-items-center custom-btn"
            onClick={() => handleNavigate(surat.suratSebelumnya.nomor)}
          >
            <i className="bi bi-arrow-bar-left"></i>
            <span className="ms-2">
              Surat {surat.suratSebelumnya.namaLatin}
            </span>
          </button>
        )}
        <h1 className="text-center">
          {surat.namaLatin} ({surat.nama})
        </h1>
        {surat.suratSelanjutnya && (
          <button
            className="btn btn-dark btn-sm d-flex align-items-center custom-btn"
            onClick={() => handleNavigate(surat.suratSelanjutnya.nomor)}
          >
            <span className="me-2">
              Baca {surat.suratSelanjutnya.namaLatin}
            </span>
            <i className="bi bi-arrow-bar-right"></i>
          </button>
        )}
      </div>
      <div className="m-4 justify-content-center text-start">
        <p>Jumlah Ayat : {surat.jumlahAyat}</p>
        <p>Tempat Turun : {surat.tempatTurun}</p>
        <p>Arti : {surat.arti}</p>
        <p dangerouslySetInnerHTML={{ __html: surat.deskripsi }}></p>
      </div>

      <div className="d-flex justify-content-between align-items-center my-4">
        <h2>Ayat</h2>
        <button className="btn btn-dark" onClick={toggleMushaf}>
          {showMushaf ? "Tampilkan Lengkap" : "Tampilkan Mushaf"}
        </button>
      </div>

      {showMushaf ? renderMushaf() : renderLengkap()}
      <Container>
        {/* Kode lainnya */}
        <Link to={`/tafsir/${nomor}`} className="btn btn-light mt-3">
          Lihat Tafsir
        </Link>
      </Container>
      <h2 className="my-3 py-3">Audio Full</h2>
      <div className="d-flex flex-wrap">
        {Object.entries(surat.audioFull).map(([key, value]) => (
          <div key={key} className="audio-card m-2">
            <div className="card-body">
              <audio controls>
                <source src={value} type="audio/mp3" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuratDetail;
