import classes from "./ThankYou.module.css";
import Lottie from "lottie-react";
import checkMarkAnimation from "../../assets/Checkmark.json";
import confettiAnimation from "../../assets/Confetti.json";
import { useState, useEffect, useRef } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion } from "framer-motion";

function ThankYou() {
  const [init, setInit] = useState(false);

  const checkMarkRef = useRef(null);
  const confettiRef = useRef(null);

  function getParticlesUrl() {
    return new URL("/particles.json", import.meta.url).href;
  }

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      checkMarkRef?.current?.play();
      confettiRef?.current?.play();
    }, 350);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <article id="thankYou" className={classes.thankYouContainer}>
      {init && (
        <Particles
          id="tsparticles"
          url={getParticlesUrl()}
          className={classes.particles}
        />
      )}
      <div className={classes.content}>
        <Lottie
          animationData={confettiAnimation}
          loop={false}
          autoplay={false}
          lottieRef={confettiRef}
          style={{
            position: "absolute",
            width: 400,
            height: 400,
            marginBottom: 20,
            zIndex: 99,
            top: "-100px",
          }}
        />
        <Lottie
          autoplay={false}
          lottieRef={checkMarkRef}
          animationData={checkMarkAnimation}
          loop={false}
          style={{ width: 100, height: 100, marginBottom: 20 }}
        />
        <div className={classes.divider} />
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.2 }}
          className={classes.thankyou}
        >
          Thank You ❤️
        </motion.h3>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.2 }}
          className={classes.quote}
        >
          Your order (76AB56) has been received.
        </motion.h3>
        <motion.h3
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2.3, duration: 0.2 }}
          className={classes.quote2}
        >
          <q>Let&apos;s rewrite your future together.</q>
        </motion.h3>
      </div>
    </article>
  );
}

export default ThankYou;
