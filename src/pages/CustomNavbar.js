// src/components/CustomNavbar.js
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Container, Button, Offcanvas } from "react-bootstrap";
import {
  FaBars,
  FaHome,
  FaBook,
  FaPray,
  FaInfoCircle,
  FaCalendarAlt,
} from "react-icons/fa";
import "./CustomNavbar.css";

function CustomNavbar() {
  const [show, setShow] = useState(false);
  const location = useLocation();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navItems = (
    <>
      <Nav.Link
        as={Link}
        to="/"
        className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
      >
        <div className="icon-text-container">
          <FaHome />
          <span>Home</span>
        </div>
      </Nav.Link>
      <Nav.Link
        as={Link}
        to="/surat"
        className={`nav-link ${location.pathname === "/surat" ? "active" : ""}`}
      >
        <div className="icon-text-container">
          <FaBook />
          <span>Al-Qur'an</span>
        </div>
      </Nav.Link>
      <Nav.Link
        as={Link}
        to="/asma"
        className={`nav-link ${location.pathname === "/asma" ? "active" : ""}`}
      >
        <div className="icon-text-container">
          <FaPray />
          <span>Asmaul Husna</span>
        </div>
      </Nav.Link>
      <Nav.Link
        as={Link}
        to="/tahlil"
        className={`nav-link ${
          location.pathname === "/tahlil" ? "active" : ""
        }`}
      >
        <div className="icon-text-container">
          <FaBook />
          <span>Tahlil</span>
        </div>
      </Nav.Link>
      <Nav.Link
        as={Link}
        to="/faq"
        className={`nav-link ${location.pathname === "/faq" ? "active" : ""}`}
      >
        <div className="icon-text-container">
          <FaInfoCircle />
          <span>FAQ</span>
        </div>
      </Nav.Link>
      <Nav.Link
        as={Link}
        to="/calendar"
        className={`nav-link ${
          location.pathname === "/calendar" ? "active" : ""
        }`}
      >
        <div className="icon-text-container">
          <FaCalendarAlt />
          <span>Calendar</span>
        </div>
      </Nav.Link>
    </>
  );

  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        className="mb-3 fixed-navbar"
      >
        <Container fluid>
          <Navbar.Brand>
            <h3 className="fw-bold py-0 my-0">e-Qur'an</h3>
            <p className="fs-6 py-0 my-0 text-warning fw-light font-monospace text-center">
              by rzlbaihaqi
            </p>
          </Navbar.Brand>
          <Button variant="dark" onClick={handleShow}>
            <FaBars />
          </Button>
        </Container>
      </Navbar>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        className="offcanvas-dark"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>e-Qur'an</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">{navItems}</Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default CustomNavbar;
