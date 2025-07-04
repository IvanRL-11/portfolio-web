import { useState } from "react";
import Hero from "./Hero";
import ParticlesBg from "./ParticlesBg";
import MenuMovil from "./MenuMovil";

const Header = () => {
  return (
    <>
      <ParticlesBg />
      <header>
        <nav className="menu-nav">
          <div className="logo">
            <a href="../index.html" className="logo">
              IR
            </a>
          </div>

          <div className={`sections-nav`}>
            <a href="#skills" className="hover-underline">
              Habilidades
            </a>
            <a href="#projects" className="hover-underline">
              Proyectos
            </a>
            <a href="#contact" className="hover-underline">
              Contacto
            </a>
          </div>
        </nav>
      </header>
      <MenuMovil />

      <Hero />
    </>
  );
};

export default Header;
