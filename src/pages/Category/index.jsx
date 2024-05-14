import { useNavigate } from "react-router-dom";
import NeonButton from "../../components/NeonButton";
import classes from "./Category.module.css";
import { useCallback, useState, useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function Category() {
  const [init, setInit] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const handleSelection = useCallback(() => {
    navigate("/describe-issue");
  }, [navigate]);

  function getParticlesUrl() {
    return new URL("/particles.json", import.meta.url).href;
  }

  return (
    <article id="category" className={classes.categoryContainer}>
      {init && (
        <Particles
          id="tsparticles"
          url={getParticlesUrl()}
          className={classes.particles}
        />
      )}
      <div className={classes.content}>
        <h2 className={`orbitron-500 ${classes.title}`}>
          Please choose your category
        </h2>
        <div className={classes.divider} />
        <div className={classes.buttonContainer}>
          <div className={classes.buttonGroup}>
            <NeonButton onClick={handleSelection}>Family</NeonButton>
            <NeonButton onClick={handleSelection}>School</NeonButton>
            <NeonButton onClick={handleSelection}>College</NeonButton>
            <NeonButton onClick={handleSelection}>Office</NeonButton>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Category;
