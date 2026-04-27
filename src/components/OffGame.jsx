import CarouselOff from "../carousels/CarouselOff";

const OffGame = () => {
  return (
    <>
      <section className="web-project">
        <article>
          <h3>Diseño UI (Interfaz de usuario)</h3>
          <p>
            Propuesta de juego memorama para la marca OFF!
            <br />
            <br />
            Desarrollé una propuesta para la creación de un juego de memorama
            con los productos de la marca <strong>OFF!</strong>, el diseño fue
            realizado con Figma; realicé los mockups para mostrar el juego de
            manera responsiva en computadora y telefono movil.
          </p>
          <div className="btns-links">
            <a
              href="https://www.figma.com/design/KGJVgIdrMh257Bmh8NOs1o/Juego-Memoria?node-id=0-1&t=mcbi05gky5tuukNz-1"
              target="_blank"
            >
              Diseño en Figma
            </a>
            <a
              href="https://www.figma.com/proto/KGJVgIdrMh257Bmh8NOs1o/Juego-Memoria?node-id=0-1&t=mcbi05gky5tuukNz-1"
              target="_blank"
            >
              Prototipo en Figma
            </a>
          </div>
        </article>
        <article className="Carousles-webP">
          <CarouselOff
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

export default OffGame;
