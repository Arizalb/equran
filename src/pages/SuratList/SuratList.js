import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Placeholder,
  Card,
  Row,
  Col,
  Form,
  InputGroup,
  Button,
} from "react-bootstrap";
import "./SuratList.css";

const SuratList = () => {
  const [surat, setSurat] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("number"); // Default sort by number
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
        setLoading(false);
      })
      .catch((error) => {
        console.error("Ada kesalahan dalam mengambil data:", error);
        setLoading(false);
      });
  }, []);

  const handleSuratClick = (nomor) => {
    navigate(`/surat/${nomor}`);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const filteredSurat = surat
    .filter((item) =>
      item.namaLatin.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortOption) {
        case "alphabet-asc":
          return a.namaLatin.localeCompare(b.namaLatin);
        case "alphabet-desc":
          return b.namaLatin.localeCompare(a.namaLatin);
        case "verses-asc":
          return a.jumlahAyat - b.jumlahAyat;
        case "verses-desc":
          return b.jumlahAyat - a.jumlahAyat;
        case "number-asc":
          return a.nomor - b.nomor;
        case "number-desc":
          return b.nomor - a.nomor;
        default:
          return a.nomor - b.nomor;
      }
    });

  return (
    <div className="container my-5">
      <h1 className="mb-4">Daftar Surat</h1>

      {/* Search and Sort Controls */}
      <Row className="mb-4">
        <Col md={6}>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Cari surat..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <Button variant="outline-secondary">Cari</Button>
          </InputGroup>
        </Col>
        <Col md={6}>
          <Form.Select value={sortOption} onChange={handleSortChange}>
            <option value="number-asc">Nomor (turun)</option>
            <option value="number-desc">Nomor (naik)</option>
            <option value="alphabet-asc">Nama (A-Z)</option>
            <option value="alphabet-desc">Nama (Z-A)</option>
            <option value="verses-asc">Jumlah Ayat (turun)</option>
            <option value="verses-desc">Jumlah Ayat (naik)</option>
          </Form.Select>
        </Col>
      </Row>

      <Row>
        {loading ? (
          Array.from({ length: 6 }).map((_, idx) => (
            <Col key={idx} xs={6} md={6} lg={4} className="mb-4">
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
        ) : Array.isArray(filteredSurat) && filteredSurat.length > 0 ? (
          filteredSurat.map((item) => (
            <Col
              key={item.nomor}
              xs={6}
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
