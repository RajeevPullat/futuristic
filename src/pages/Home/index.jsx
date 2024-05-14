import classes from "./Home.module.css";
import { useCallback, useEffect, useState, useRef } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { VscSearch } from "react-icons/vsc";
import { ThreeCircles } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

function Home() {
  const [init, setInit] = useState(false);
  const [searchState, setSearchState] = useState("idle");
  const textBoxRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
    textBoxRef?.current?.focus();
  }, []);

  useEffect(() => {
    let timeout = null;
    if (searchState === "pending") {
      timeout = setTimeout(() => {
        setSearchState("success");
        navigate("/category");
      }, 900);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [navigate, searchState]);

  function getParticlesUrl() {
    return new URL("/particles.json", import.meta.url).href;
  }

  const particlesLoaded = useCallback((container) => {
    console.log(container);
  }, []);

  const handlekeyDown = useCallback((e) => {
    console.log(e);
    if (e.keyCode === 13) {
      setSearchState("pending");
    }
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
          <div className={classes.searchBoxContainer}>
            <VscSearch color="#fff" size={32} className={classes.icon} />
            <input
              type="text"
              className={classes.searchBox}
              placeholder="Enter your search query"
              ref={textBoxRef}
              onKeyDown={handlekeyDown}
              disabled={searchState === "pending"}
            />
            <div className={classes.loader}>
              {searchState === "pending" && (
                <ThreeCircles
                  visible={true}
                  height="32"
                  width="32"
                  color="#fff"
                  ariaLabel="three-circles-loading"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Home;
