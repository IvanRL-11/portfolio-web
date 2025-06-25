import react from "../assets/icons/react.svg";
import AI from "../assets/icons/ai.svg";
import PS from "../assets/icons/ps.svg";
import PR from "../assets/icons/pr.svg";
import AE from "../assets/icons/ae.svg";
import InD from "../assets/icons/id.svg";
import Figma from "../assets/icons/figma.svg";
import HTML from "../assets/icons/html.svg";
import CSS from "../assets/icons/css.svg";
import JS from "../assets/icons/js.svg";
import SASS from "../assets/icons/sass.svg";
import BOOTSTRAP from "../assets/icons/bootstrap.svg";
import DRUPAL from "../assets/icons/drupal.svg";
import WP from "../assets/icons/wp.svg";

const Skills = () => {
  return (
    <>
      <section className="layout-secc cont-lateral" id="skills">
        <h2>Habilidades</h2>
        <h3 className="sub-title-sec">Diseño</h3>
        <section className="design-skill">
          <figure className="icon">
            <img src={AI} alt="Illustrator icon" />
            <figcaption>Illustrator</figcaption>
            <p>60%</p>
          </figure>
          <figure className="icon">
            <img src={PS} alt="Photoshop icon" />
            <figcaption>Photoshop</figcaption>
            <p>60%</p>
          </figure>
          <figure className="icon">
            <img src={InD} alt="InDesign icon" />
            <figcaption>InDesign</figcaption>
            <p>50%</p>
          </figure>
          <figure className="icon">
            <img src={PR} alt="Premiere Pro icon" />
            <figcaption>Premiere Pro</figcaption>
            <p>60%</p>
          </figure>
          <figure className="icon">
            <img src={AE} alt="After Effects icon" />
            <figcaption>After Effects</figcaption>
            <p>40%</p>
          </figure>
          <figure className="icon">
            <img src={Figma} alt="Figma icon" />
            <figcaption>Figma</figcaption>
            <p>35%</p>
          </figure>
        </section>
        <h3 className="sub-title-sec">Desarrollo Web</h3>
        <section className="develop-skill">
          <figure className="icon">
            <img src={HTML} alt="HTML icon" />
            <figcaption>HTML</figcaption>
          </figure>
          <figure className="icon">
            <img src={CSS} alt="CSS icon" />
            <figcaption>CSS</figcaption>
          </figure>
          <figure className="icon">
            <img src={JS} alt="JavaScript icon" />
            <figcaption>JavaScript</figcaption>
          </figure>
          <figure className="icon">
            <img src={SASS} alt="Sass icon" />
            <figcaption>Sass</figcaption>
          </figure>
          <figure className="icon">
            <img src={BOOTSTRAP} alt="Bootstrap icon" />
            <figcaption>Bootstrap</figcaption>
          </figure>
          <figure className="icon">
            <img src={react} alt="React icon" />
            <figcaption>React</figcaption>
          </figure>
          <figure className="icon">
            <img src={WP} alt="WordPress icon" />
            <figcaption>WordPress</figcaption>
          </figure>
          <figure className="icon">
            <img src={DRUPAL} alt="Drupal icon" />
            <figcaption>Drupal</figcaption>
          </figure>
        </section>
      </section>
    </>
  );
};

export default Skills;
