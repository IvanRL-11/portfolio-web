import React from "react";
import WebProyects from "./WebProyects";
import DesignProjects from "./DesignProjects";

const Projects = () => {
  return (
    <>
      <section className="layout-secc" id="projects">
        <h2>Proyectos</h2>
        <WebProyects />
        <DesignProjects />
      </section>
    </>
  );
};

export default Projects;
