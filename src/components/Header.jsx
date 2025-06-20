import Hero from "./Hero";
import ParticlesBg from "./ParticlesBg";

const Header = () => {
  return (
    <>
      <ParticlesBg />
      <header>
        <nav className="menu-nav cont-margin">
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
            <a className="hover-underline" href="#contact">
              Contacto
            </a>
          </div>
        </nav>
      </header>
      <Hero />
    </>
  );
};

export default Header;
