import { useState } from "react";

const MenuMovil = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header>
        <nav className="menu-movil">
          <div className="logo">
            <a href="../index.html" className="logo">
              IR
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

          <div className={`nav-movil ${menuOpen ? "open" : ""}`}>
            {/* <div className="logo">
              <img src="/vite.svg" alt="logo-website" />
            </div> */}

            <a href="#skills" onClick={closeMenu} className="hover-underline">
              Habilidades
            </a>
            <a href="#projects" onClick={closeMenu} className="hover-underline">
              Proyectos
            </a>
            <a href="#contact" onClick={closeMenu} className="hover-underline">
              Contacto
            </a>

            {menuOpen && (
              <div className="nav-overlay" onClick={closeMenu}></div>
            )}
          </div>
        </nav>
      </header>

      {/* {menuOpen && <div className="overlay" onClick={closeMenu}></div>} */}
    </>
  );
};

export default MenuMovil;
