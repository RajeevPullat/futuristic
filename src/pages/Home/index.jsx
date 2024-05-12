import classes from "./Home.module.css";
import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function Home() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  function getParticlesUrl() {
    return new URL("/particles.json", import.meta.url).href;
  }

  const particlesLoaded = useCallback((container) => {
    console.log(container);
  }, []);

  return (
    <article id="home" className={classes.homeContainer}>
      {init && (
        <Particles
          id="tsparticles"
          url={getParticlesUrl()}
          particlesLoaded={particlesLoaded}
          className={classes.particles}
        />
      )}
      <div className={classes.robot}>
        <div className={classes.content}>
          <h2 className={`orbitron-500 ${classes.title}`}>
            How can I help you?
          </h2>
          <input
            type="text"
            className={classes.searchBox}
            placeholder="Enter your search query"
          />
        </div>
      </div>
    </article>
  );
}

export default Home;
