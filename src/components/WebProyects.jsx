import medaud from "../assets/Mockups/medaud.png";
import dda from "../assets/Mockups/dda.png";
import transi from "../assets/Mockups/transitos.png";

const WebProyects = () => {
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
          <button className="btn-ver-mas">
            <a href="#">Ver más</a>
          </button>
        </div>
        <div className="card-web">
          <img src={dda} alt="Medaud Web site" />
          <h4 className="title-card">DDA</h4>
          <p className="description">
            Desarrollo de un sitio web para la Dirección de Desarrollo
            Académico, del Centro Nacional de las Artes.
          </p>
          <button className="btn-ver-mas">
            <a href="#">Ver más</a>
          </button>
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
