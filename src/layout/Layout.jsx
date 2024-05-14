import { useLocation, useNavigate } from "react-router-dom";
import logoImage from "../assets/logo.png";
import classes from "./Layout.module.css";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedOutlet from "./AnimatedOutlet";

const pageTransition = {
  initial: {
    x: "-100%",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

function Layout() {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <main>
      <div className={classes.logo} role="button" onClick={handleLogoClick}>
        <img src={logoImage} alt="logo" />
      </div>
      <AnimatePresence mode="wait" initial={true}>
        <motion.div
          className="page-content"
          variants={pageTransition}
          initial="initial"
          animate="animate"
          exit="exit"
          key={pathname}
          transition={{
            type: "spring",
            stiffness: 85,
            damping: 10,
          }}
        >
          <AnimatedOutlet />
        </motion.div>
      </AnimatePresence>
    </main>
  );
}

export default Layout;
