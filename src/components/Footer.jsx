import React from "react";

const Footer = () => {
  const Year = new Date().getFullYear();
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
        <p>© Copyright {Year} · Iván Romero</p>
      </footer>
    </>
  );
};

export default Footer;
