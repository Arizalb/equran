import React from "react";
import "./Footer.css";

const Footer = () => {
  const handleNavigation = (url) => {
    window.location.href = url;
  };

  return (
    <footer className="bg-dark text-white text-center py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>WhatsApp</h5>
            <p
              onClick={() => handleNavigation("https://wa.me/")}
              className="hover-link"
            >
              Chat with me on WhatsApp
            </p>
          </div>
          <div className="col-md-4">
            <h5>Instagram</h5>
            <p
              onClick={() =>
                handleNavigation("https://www.instagram.com/rzlbaihaqi")
              }
              className="hover-link"
            >
              Follow me on Instagram
            </p>
          </div>
          <div className="col-md-4">
            <h5>GitHub</h5>
            <p
              onClick={() => handleNavigation("https://github.com/Arizalb")}
              className="hover-link"
            >
              Check my GitHub
            </p>
          </div>
        </div>
        <div className="mt-3">
          <p>© 2024 DeweWani. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
