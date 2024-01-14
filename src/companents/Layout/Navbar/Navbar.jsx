import React from "react";
import styles from "./Navbar.module.css";
import NavbarIcon from "../../../assets/icons/food-logo.svg";
import Button from "../../helper/Button/Button1";
const Navbar = () => {
  return (
    <div className={styles["navbar"]}>
      <div className={styles["navbar-icon"]}>
        <img src={NavbarIcon} alt="" />
      </div>
      <ul className={styles["navigation"]}>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About us</a>
        </li>
        <li>
          <a href="">Menu</a>
        </li>
        <li>
          <a href="">Features</a>
        </li>
        <li>
          <a href="">Contact us</a>
        </li>
      </ul>

      <Button text={"Booking Now"} baccolor={"primary"} />
    </div>
  );
};

export default Navbar;
