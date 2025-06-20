import Particles from "./Particles";
import "../Styles/Particles.css";

const ParticlesBg = () => {
  return (
    <div
      className="particles-bg" /*style={{ width: "100%", height: "600px", position: "relative" }}*/
    >
      <Particles
        particleColors={["#00CC66", "#00CC66"]}
        particleCount={300}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
    </div>
  );
};

export default ParticlesBg;
