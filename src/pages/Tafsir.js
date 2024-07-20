// src/pages/Tafsir.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";

const Tafsir = () => {
  const { nomor } = useParams();
  const [tafsirData, setTafsirData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTafsir = async () => {
      try {
        const response = await axios.get(
          `https://equran.id/api/v2/tafsir/${nomor}`
        );
        setTafsirData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching tafsir data:", error);
        setLoading(false);
      }
    };

    fetchTafsir();
  }, [nomor]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!tafsirData) {
    return <div>Data not found</div>;
  }

  return (
    <Container>
      <Row>
        <Col>
          <h1>
            {tafsirData.namaLatin} ({tafsirData.nama})
          </h1>
          <p>
            <strong>Arti:</strong> {tafsirData.arti}
          </p>
          <p>
            <strong>Tempat Turun:</strong> {tafsirData.tempatTurun}
          </p>
          <p>
            <strong>Jumlah Ayat:</strong> {tafsirData.jumlahAyat}
          </p>
          <p dangerouslySetInnerHTML={{ __html: tafsirData.deskripsi }}></p>
          {tafsirData.tafsir.map((ayat, index) => (
            <Card key={index} className="mb-3">
              <Card.Body>
                <Card.Title>Ayat {ayat.ayat}</Card.Title>
                <Card.Text>{ayat.teks}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Tafsir;
