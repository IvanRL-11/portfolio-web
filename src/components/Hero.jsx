import avatar from "../assets/avatar.png";
import "../Styles/Particles.css";

const Hero = () => {
  return (
    <>
      <section className="secc-info">
        <figure className="img-p">
          <img src={avatar} alt="Porfile image" loading="eager" />
        </figure>
        <div className="info-p">
          <h1>
            Hola, soy Iván Romero
            <br /> Diseñador de la Comunicación Gráfica
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
            consectetur sapien. Praesent metus velit, consequat eu condimentum
            eu, gravida at dolor. Pellentesque mi nunc, pharetra eu purus eget,
            tincidunt tincidunt sapien.
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
