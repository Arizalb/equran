// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import CustomNavbar from "./pages/Navbar/CustomNavbar";
import Footer from "./pages/Footer";
import Homepage from "./pages/Homepage/Homepage";
import SuratList from "./pages/SuratList/SuratList";
import SuratDetail from "./pages/SuratDetail/SuratDetail";
import AsmaulHusna from "./pages/AsmaulHusna/AsmaulHusnaList";
import Tahlil from "./pages/Tahlil/Tahlil";
import DoaHarian from "./pages/DoaHarian/DoaHarian";
import AyatKursi from "./pages/AyatKursi/AyatKursi";
import Calendar from "./pages/Kalender";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="">
        <div className="content">
          <div className="">
            <CustomNavbar />
          </div>
          <Routes>
            <Route path="/" exact element={<Homepage />} />
            <Route path="/surat" exact element={<SuratList />} />
            <Route path="/surat/:nomor" element={<SuratDetail />} />
            <Route path="/asma" element={<AsmaulHusna />} />
            <Route path="/tahlil" element={<Tahlil />} />
            <Route path="/doa" element={<DoaHarian />} />
            <Route path="/ayat-kursi" element={<AyatKursi />} />
            <Route path="/calendar" element={<Calendar />} />
          </Routes>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
