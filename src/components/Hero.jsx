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
            <br /> Diseñador Gráfico con enfoque en UX/UI y Desarrollo Web
          </h1>
          <p>
            Diseño experiencias digitales claras y funcionales, enfocadas en la usabilidad y la coherencia visual. Complemento mi proceso con conocimientos en desarrollo frontend para llevar las ideas a implementación.
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
