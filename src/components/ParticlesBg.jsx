import Particles from "./Particles";
import "../Styles/Particles.css";

const ParticlesBg = () => {
  const isMobile = window.innerWidth < 768;

  return (
    <div className="particles-bg">
      <Particles
        particleColors={["#00CC66", "#00CC66"]}
        particleCount={isMobile ? 80 : 300}
        particleSpread={isMobile ? 30 : 10}
        speed={isMobile ? 0.05 : 0.1}
        particleBaseSize={isMobile ? 20 : 100}
        moveParticlesOnHover={!isMobile}
        alphaParticles={false}
        disableRotation={false}
      />
    </div>
  );
};

export default ParticlesBg;
