import React from "react";
import EstudiosCarousel from "../carousels/EstudiosCarousel";

const EstudiosIntWebs = () => {
  return (
    <>
      <section className="web-project">
        <article>
          <h3>Diseño</h3>
          <p>
            Realicé la paleta cromática para la actualización de los sitios web
            en su nueva oferta educativa, Tránsitos 33 y OCI 2024-2025/2.
          </p>
          <h3>Desarrollo web</h3>
          <p>
            Implementé mejoras en los sitios web desarrollados con WordPress,
            incluyendo la actualización de colores y estilos mediante CSS, la
            reorganización del contenido desde el panel de administración, y
            ajustes en el layout a nivel de código y plantilla.
          </p>
          <a href="#">Sitio web OCI</a> <br />
          <a href="#">Sitio web TRÁNSITOS</a>
        </article>
        <article className="Carousles-webP">
          <EstudiosCarousel
            baseWidth={330}
            autoplay={true}
            autoplayDelay={3000}
            pauseOnHover={true}
            loop={true}
            round={false}
          />
        </article>
      </section>
    </>
  );
};

export default EstudiosIntWebs;
