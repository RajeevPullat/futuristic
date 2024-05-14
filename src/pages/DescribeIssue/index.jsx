import { useRef, useState, useEffect } from "react";
import classes from "./DescribeIssue.module.css";
import { IoSendSharp } from "react-icons/io5";
import { ThreeCircles } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function DescribeIssue() {
  const [init, setInit] = useState(false);
  const [sendState, setSendState] = useState("idle");
  const textBoxRef = useRef(null);
  const navigate = useNavigate();

  function getParticlesUrl() {
    return new URL("/particles.json", import.meta.url).href;
  }

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
    if (sendState === "pending") {
      timeout = setTimeout(() => {
        setSendState("success");
        navigate("/thankyou");
      }, 900);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [navigate, sendState]);

  const handleSend = () => {
    setSendState("pending");
  };

  return (
    <article id="describeIssue" className={classes.issueContainer}>
      {init && (
        <Particles
          id="tsparticles"
          url={getParticlesUrl()}
          className={classes.particles}
        />
      )}
      <div className={classes.content}>
        <h2 className={`orbitron-500 ${classes.title}`}>
          Please describe your issue
        </h2>
        <div className={classes.divider} />
        <div className={classes.inputContainer}>
          <textarea
            className={classes.issueInput}
            placeholder="Describe your issue in detail"
            ref={textBoxRef}
            rows={2}
          ></textarea>

          <button
            type="button"
            className={classes.sendButton}
            onClick={handleSend}
          >
            {sendState === "pending" ? (
              <ThreeCircles
                visible={true}
                height="32"
                width="32"
                color="#fff"
                ariaLabel="three-circles-loading"
              />
            ) : (
              <IoSendSharp color="#fff" size="3rem" />
            )}
          </button>
        </div>
      </div>
    </article>
  );
}

export default DescribeIssue;
