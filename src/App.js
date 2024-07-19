// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import SuratList from "./pages/SuratList";
import SuratDetail from "./pages/SuratDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App container">
          <header className="App-header">
            <h1>Al-Quran Web App</h1>
          </header>
          <main>
            <div className="container">
              <Routes>
                <Route path="/" exact element={<Homepage />} />
                <Route path="/surat" exact element={<SuratList />} />
                <Route path="/surat/:nomor" element={<SuratDetail />} />
              </Routes>
            </div>
          </main>
          <footer>
            <div className="card-footer text-body-secondary">
              <p>Al-Quran Web App | Baehaqee</p>
            </div>
          </footer>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
