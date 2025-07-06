import Particles from "./Particles";
import "../Styles/Particles.css";

const ParticlesBg = () => {
   const isMobile = window.innerWidth < 768;

  return (
    <div className="particles-bg">
      <Particles
        particleColors={["#00CC66", "#00CC66"]}
        particleCount={isMobile ? 150 : 300}
        particleSpread={isMobile ? 15 : 10}
        speed={isMobile ? 0.07 : 0.1}
        particleBaseSize={isMobile ? 100 : 100}
        moveParticlesOnHover={!isMobile}
        alphaParticles={false}
        disableRotation={false}
      />
    </div>
  );
};

export default ParticlesBg;
