import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <nav className="footer-nav">
          <div className="logo">
            <a href="../index.html">
              <img src="/vite.svg" alt="logo-website" />
            </a>
          </div>
          <div className="sections-nav">
            <a className="hover-underline" href="#skills">
              Habilidades
            </a>
            <a className="hover-underline" href="#projects">
              Proyectos
            </a>
            <a className="hover-underline" href="#Contact">
              Contacto
            </a>
          </div>
        </nav>
        <p>© Copyright 2025 · Iván Romero</p>
      </footer>
    </>
  );
};

export default Footer;
