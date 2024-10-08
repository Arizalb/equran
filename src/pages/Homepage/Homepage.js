// src/components/Homepage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Homepage.css";
import quranImage from "../assets/alquran.png"; // Pastikan path gambar sesuai dengan lokasi file

const Homepage = () => {
  const navigate = useNavigate();

  const navigateToSuratList = () => {
    navigate("/surat");
  };

  return (
    <Container fluid className="home-container">
      <Container className="intro-section">
        <Row className="align-items-center">
          <Col md={6} className="text-container-home py-4 my-4">
            <h1 className="title-hero fw-bold">e-Qur'an</h1>
            <p className="sub-title">Baca Al-Qur'an dimanapun dan kapanpun</p>
            <Button className="btn btn-dark mx-4" onClick={navigateToSuratList}>
              Mulai Baca
            </Button>
          </Col>
          <Col md={6} className="image-container-home">
            <img
              src={quranImage}
              alt="Quran Illustration"
              className="img-fluid-home"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Homepage;
