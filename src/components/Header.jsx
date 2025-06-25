import { useState } from "react";
import Hero from "./Hero";
import ParticlesBg from "./ParticlesBg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <ParticlesBg />
      <header>
        <nav className="menu-nav">
          <div className="logo">
            <a href="../index.html">
              <img src="/vite.svg" alt="logo-website" />
            </a>
          </div>

          <button
            className={`menu-toggle ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
            aria-label="Abrir/Cerrar menú"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`sections-nav ${menuOpen ? "open" : ""}`}>
            <a
              onClick={(e) => {
                e.preventDefault();
                closeMenu();
                setTimeout(() => {
                  const section = document.getElementById("skills");
                  section?.scrollIntoView({ behavior: "smooth" });
                }, 300);
              }}
              className="hover-underline"
            >
              Habilidades
            </a>

            <a
              onClick={(e) => {
                e.preventDefault();
                closeMenu();
                setTimeout(() => {
                  const section = document.getElementById("projects");
                  section?.scrollIntoView({ behavior: "smooth" });
                }, 300);
              }}
              className="hover-underline"
            >
              Proyectos
            </a>

            <a
              onClick={(e) => {
                e.preventDefault();
                closeMenu();
                setTimeout(() => {
                  const section = document.getElementById("contact");
                  section?.scrollIntoView({ behavior: "smooth" });
                }, 300);
              }}
              className="hover-underline"
            >
              Contacto
            </a>
            {/* <a href="#skills" onClick={closeMenu} className="hover-underline">
              Habilidades
            </a>
            <a href="#projects" onClick={closeMenu} className="hover-underline">
              Proyectos
            </a>
            <a href="#contact" onClick={closeMenu} className="hover-underline">
              Contacto
            </a> */}
          </div>
        </nav>
      </header>

      {menuOpen && <div className="overlay" onClick={closeMenu}></div>}

      <Hero />
    </>
  );
};

export default Header;
