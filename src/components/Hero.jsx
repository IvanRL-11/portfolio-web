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
            Diseñador enfocado en la creación de experiencias digitales claras y funcionales. Integro principios de usabilidad y diseño visual, complementando mi trabajo con conocimientos en desarrollo frontend.
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
