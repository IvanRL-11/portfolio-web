import medaud from "../assets/Mockups/medaud.png";
import dda from "../assets/Mockups/dda.png";
import transi from "../assets/Mockups/transitos.png";
//Modal - Ventana Emergente
import ModalWebP from "./ModalWebP";
import { useModal } from "../hooks/useModal";
import CarouselAnimation from "../carousels/CarouselAnimation";

const WebProyects = () => {
  const [isOpenModalMed, openModalMed, closeModalMed] = useModal(false);
  const [isOpenModalDDA, openModalDDA, closeModalDDA] = useModal(false);
  const [isOpenModalEsInt, openModalEsInt, closeModalEsInt] = useModal(false);

  return (
    <>
      <h3 className="sub-title-sec">Diseño y Desarrollo Web</h3>
      <section className="web-p">
        <div className="card-web">
          <img src={medaud} alt="Medaud Web site" />
          <h4 className="title-card">MEDAUD</h4>
          <p className="description">
            Sitio web del área de Medios Audiovusales, de la Lic. en Diseño de
            la Comunicacón Gráfica, UAM Xochimilco.
          </p>
          <button onClick={openModalMed} className="btn-ver-mas">
            <a>Ver más</a>
          </button>
          <ModalWebP isOpen={isOpenModalMed} closeModal={closeModalMed}>
            <h2>Medaud</h2>
            <CarouselAnimation
              baseWidth={330}
              autoplay={true}
              autoplayDelay={1000}
              pauseOnHover={true}
              loop={true}
              round={false}
            />
          </ModalWebP>
        </div>
        <div className="card-web">
          <img src={dda} alt="Medaud Web site" />
          <h4 className="title-card">DDA</h4>
          <p className="description">
            Desarrollo de un sitio web para la Dirección de Desarrollo
            Académico, del Centro Nacional de las Artes.
          </p>
          <button className="btn-ver-mas" onClick={openModalDDA}>
            <a>Ver más</a>
          </button>
          <ModalWebP isOpen={isOpenModalDDA} closeModal={closeModal2}>
            <h3>Otro Modal</h3>
            <p>Lorem ipsum</p>
            <img src="https://picsum.photos/300/300" alt="PlaceImg" />
          </ModalWebP>
        </div>
        <div className="card-web">
          <img src={transi} alt="Medaud Web site" />
          <h4 className="title-card">Tránsitos & OCI</h4>
          <p className="description">
            Actualización y mantenimiento de los sitios web de la dirección de
            Estudios Interdisciplinarios del CENART.
          </p>
          <button className="btn-ver-mas">
            <a href="#">Ver más</a>
          </button>
        </div>
      </section>
    </>
  );
};

export default WebProyects;
