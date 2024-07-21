// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import CustomNavbar from "./pages/CustomNavbar";
import Footer from "./pages/Footer";
import Homepage from "./pages/Homepage";
import SuratList from "./pages/SuratList";
import SuratDetail from "./pages/SuratDetail";
import AsmaulHusna from "./pages/AsmaulHusnaList";
// import Tahlil from "./pages/Tahlil";
// import FAQ from "./pages/FAQ";
// import Calendar from "./pages/Calendar";
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
            {/* <Route path="/tahlil" element={<Tahlil />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/calendar" element={<Calendar />} /> */}
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
