import { Outlet } from "react-router-dom";
import logoImage from "../assets/logo.png";
import classes from "./Layout.module.css";

function Layout() {
  return (
    <main>
      <div className={classes.logo}>
        <img src={logoImage} alt="logo" />
      </div>
      <div className="page-content">
        <Outlet />
      </div>
    </main>
  );
}

export default Layout;
