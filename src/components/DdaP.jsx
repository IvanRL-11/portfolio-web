import DDACarousel from "../carousels/DDACarousel";

const DdaP = () => {
  return (
    <>
      <section className="web-project">
        <article>
          <h3>Diseño</h3>
          <p>
            Realice algunas propuestas UX para el sitio web de la Dirección de
            Desarrollo Académico del Centro Nacional de las Artes.
          </p>
          <h3>Desarrollo web</h3>
          <p>
            Participé en el desarrollo del sitio web de la Dirección de
            Desarrollo Académico, implementado con WordPress. Contribuí con
            ajustes personalizados de layout y estilo mediante código CSS.
          </p>
          <a href="https://desarrolloacademico.cenart.gob.mx/" target="_blank">Sitio web DDA</a>
        </article>
        <article className="Carousles-webP">
          <DDACarousel
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

export default DdaP;
