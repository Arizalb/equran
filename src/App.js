// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./pages/Sidebar";
import Homepage from "./pages/Homepage";
import SuratList from "./pages/SuratList";
import SuratDetail from "./pages/SuratDetail";
import Tafsir from "./pages/Tafsir";
import AsmaulHusnaList from "./pages/AsmaulHusnaList";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App d-flex">
          <Sidebar />
          <div className="main-content flex-grow-1">
            <header className="App-header">
              <h1>Al-Quran Web App</h1>
            </header>
            <main className="container mt-4">
              <Routes>
                <Route path="/" exact element={<Homepage />} />
                <Route path="/surat" exact element={<SuratList />} />
                <Route path="/surat/:nomor" element={<SuratDetail />} />
                <Route path="/tafsir/:nomor" element={<Tafsir />} />
                <Route path="/asma" element={<AsmaulHusnaList />} />
              </Routes>
            </main>
            <footer>
              <div className="card-footer text-body-secondary text-center mt-4">
                <p>Al-Quran Web App | Baehaqee</p>
              </div>
            </footer>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
