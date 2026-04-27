import CarouselHabits from "../carousels/CarouselHabits";

const AppTask = () => {
  return (
    <>
      <section className="web-project">
        <article>
          <h3>App de hábitos (MVP UX)</h3>
          <p>
            Diseño de una solución enfocada en ayudar a usuarios a crear y
            mantener hábitos mediante una experiencia simple y adaptada a su
            rutina diaria.
          </p>
          <p>
            Proyecto centrado en el proceso UX: investigación, definición,
            ideación y prototipado en media fidelidad.
          </p>
          <p>
            Se desarrolló un MVP enfocado en validar la experiencia del usuario
            antes de pasar a una fase visual de alta fidelidad.
          </p>
          <p>
            -Investigación sobre cambio de hábitos <br />
            -Definición de usuario y journey <br />
            -Ideación y validación de soluciones
            <br />
            -Diseño de flujos y wireframes
            <br />
          </p>
          <div className="btns-links">
            <a
              href="https://www.figma.com/board/U2ycRnXdJEnQZqg8eCjHA9/Proyecto-UX?node-id=0-1&t=8s0i77CwutjdWnrf-1"
              target="_blank"
            >
              Proceso completo
            </a>

            <a
              href="https://www.figma.com/proto/FkY22LTwIBo2OGn8THaKKj/H%C3%A1bitos-Wireframes?node-id=20-56&page-id=0%3A1&starting-point-node-id=20%3A53&scaling=scale-down&t=cBPmOgNze9SajrtN-1"
              target="_blank"
            >
              Prototipo interactivo
            </a>
          </div>
        </article>
        <article className="Carousles-webP">
          <CarouselHabits
            baseWidth={330}
            autoplay={true}
            autoplayDelay={5000}
            pauseOnHover={true}
            loop={true}
            round={false}
          />
        </article>
      </section>
    </>
  );
};

export default AppTask;
