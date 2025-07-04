import avatarFinal from "../assets/avatar.webp";
import "../Styles/Particles.css";

const Hero = () => {
  return (
    <>
      <section className="secc-info">
        <figure className="img-p">
          <img src={avatarFinal} alt="Porfile image" loading="eager" />
        </figure>
        <div className="info-p">
          <h1>
            Hola, soy Iván Romero
            <br /> Diseñador de la Comunicación Gráfica
          </h1>
          <p>
            Tengo pasión por el Diseño y Desarrollo Web, en cada proyecto busco
            integrar soluciones visuales y funcionales mediante el uso de
            herramientas de diseño y tecnologías web. También tengo conocimiento
            en medios audiovisuales, lo que me permite abordar los proyectos con
            un enfoque narrativo, estético y multidisciplinario.
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
