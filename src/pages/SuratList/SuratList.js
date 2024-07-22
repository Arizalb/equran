import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Placeholder, Card, Row, Col } from "react-bootstrap";
import "./SuratList.css";

const SuratList = () => {
  const [surat, setSurat] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading
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
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("Ada kesalahan dalam mengambil data:", error);
        setLoading(false); // Set loading to false even if there is an error
      });
  }, []);

  const handleSuratClick = (nomor) => {
    navigate(`/surat/${nomor}`);
  };

  return (
    <div className="container my-5">
      <h1 className="mb-4">Daftar Surat</h1>
      <Row>
        {loading ? (
          // Show placeholders while loading
          Array.from({ length: 6 }).map((_, idx) => (
            <Col key={idx} md={6} lg={4} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={6} />
                  </Placeholder>
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                    <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                    <Placeholder xs={8} />
                  </Placeholder>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : // Show actual data once loaded
        Array.isArray(surat) && surat.length > 0 ? (
          surat.map((item) => (
            <Col
              key={item.nomor}
              md={6}
              lg={4}
              className="mb-4"
              onClick={() => handleSuratClick(item.nomor)}
            >
              <Card className="h-100">
                <Card.Body>
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
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col>
            <p>Data surat tidak tersedia</p>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default SuratList;
