import MedaudCarousel from "../carousels/MedaudCarousel";

const Meduad = () => {
  return (
    <>
      <section className="web-project">
        <article>
          <h3>Diseño</h3>
          <p>
            Sitio web del área de Medios audiovisuales, Universidad Autónoma
            Metropolitana, Unidad Xochimilco.
            <br /> <strong>Rol:</strong> Co-diseñador y desarrollador.
            <br />
            Medaud fué desarrollado como proyecto terminal dentro del área de
            medios audiovisuales. El objetivo del desarrollo, es que los alumnos
            de la licenciatura en Diseño de la Comunicación Gráfica, conozcan
            sobre el tipo de proyectos que se realizan dentro del área y los
            procesos que se siguen para cada proyecto.
            <br /> Colaboré en la investigación y diseño del sitio web, buscando
            solucionar las necesidades del área y del público objetivo.
          </p>
          <h3>Desarrollo web</h3>
          <p>
            <strong>Herramientas:</strong> Drupal, HTML, CSS, Sass, Bootstrap.
            <br />
            Desarrollé el sitio web junto con dos desarrolladores
            experimentados, implementamos el sitio web mediante el CMS Drupal y
            creando un tema personalizado desde cero, utilizando tecnologías
            como HTML, CSS, Sass y Bootstrap.
          </p>
          <a href="https://medaud.alephdiscom.net/" target="_blank">Sitio web MEDAUD</a>
        </article>
        <article className="Carousles-webP">
          <MedaudCarousel
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

export default Meduad;
