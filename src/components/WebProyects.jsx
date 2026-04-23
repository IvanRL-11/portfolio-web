import medaud from "../assets/Mockups/medaud.webp";
import dda from "../assets/Mockups/dda.webp";
import transi from "../assets/Mockups/transitos.webp";
import off from "../assets/Mockups/OFF!.webp";
import app from "../assets/Mockups/App.webp";
//Modal - Ventana Emergente
import ModalWebP from "./ModalWebP";
import { useModal } from "../hooks/useModal";
import MeduadP from "./MeduadP";
import DdaP from "./DdaP";
import EstudiosIntWebs from "./EstudiosIntWebs";
import OffGame from "./OffGame";
import AppTask from "./AppTask";

const WebProyects = () => {
  const [isOpenModalMed, openModalMed, closeModalMed] = useModal(false);
  const [isOpenModalDDA, openModalDDA, closeModalDDA] = useModal(false);
  const [isOpenModalEsInt, openModalEsInt, closeModalEsInt] = useModal(false);
  const [isOpenModalOff, openModalOff, closeModalOff] = useModal(false);
  const [isOpenModalTask, openModalTask, closeModalTask] = useModal(false);

  return (
    <>
      <h3 className="sub-title-sec">Diseño y Desarrollo Web</h3>
      <section className="web-p">
        <div className="card-web">
          <img src={app} alt="Track habits" loading="lazy" />
          <h4 className="title-card">App de hábitos (UX)</h4>
          <p className="description">
            Pequeña app enfocada en ayudar a usuarios a crear y mantener hábitos mediante micro-acciones.
          </p>
          <button onClick={openModalTask} className="btn-ver-mas">
            <a>Ver más</a>
          </button>
          <ModalWebP isOpen={isOpenModalTask} closeModal={closeModalTask}>
            <h2>App Hábitos (UX)</h2>
            <AppTask />
          </ModalWebP>
        </div>
        <div className="card-web">
          <img src={medaud} alt="Medaud Web site" loading="lazy" />
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
            <MeduadP />
          </ModalWebP>
        </div>
        <div className="card-web">
          <img src={off} alt="OFF! Game" loading="lazy" />
          <h4 className="title-card">OFF!</h4>
          <p className="description">
            Propuesta UI para juego memorama de los productos de la marca OFF!.
            Realizado en Figma.
          </p>
          <button className="btn-ver-mas" onClick={openModalOff}>
            <a>Ver más</a>
          </button>
          <ModalWebP isOpen={isOpenModalOff} closeModal={closeModalOff}>
            <h2>OFF!</h2>
            <OffGame />
          </ModalWebP>
        </div>
        <div className="card-web">
          <img src={dda} alt="Medaud Web site" loading="lazy" />
          <h4 className="title-card">DDA</h4>
          <p className="description">
            Desarrollo de un sitio web para la Dirección de Desarrollo
            Académico, del Centro Nacional de las Artes.
          </p>
          <button className="btn-ver-mas" onClick={openModalDDA}>
            <a>Ver más</a>
          </button>
          <ModalWebP isOpen={isOpenModalDDA} closeModal={closeModalDDA}>
            <h2>Dirección de Desarrollo Académico</h2>
            <DdaP />
          </ModalWebP>
        </div>
        <div className="card-web">
          <img src={transi} alt="Medaud Web site" loading="lazy" />
          <h4 className="title-card">Tránsitos & OCI</h4>
          <p className="description">
            Actualización y mantenimiento de los sitios web de la dirección de
            Estudios Interdisciplinarios del CENART.
          </p>
          <button className="btn-ver-mas" onClick={openModalEsInt}>
            <a>Ver más</a>
          </button>
          <ModalWebP isOpen={isOpenModalEsInt} closeModal={closeModalEsInt}>
            <h2>
              Diplomado Tránsitos & <br />
              Ofeta Curricular Interdisciplinaria
            </h2>
            <EstudiosIntWebs />
          </ModalWebP>
        </div>
      </section>
    </>
  );
};

export default WebProyects;
