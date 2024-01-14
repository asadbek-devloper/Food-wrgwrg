import React from "react";
import Navbar from "./../Navbar/Navbar";
import styles from "./Header.module.css";
import Button from "../../helper/Button/Button1";
import HeaderImg from "../../../assets/images/Header-img.png";
const Header = () => {
  return (
    <div>
      <Navbar />
      <div className={styles["header"]}>
        <div className={styles["left"]}>
          <h2>Making time a good time by making food the good food.</h2>
          <p>
            There are many things are needed to start the Fast Food Business.
            You need not only Just Food Stalls with Persons but also specialized
            equipment,
          </p>
          <div className={styles["btns"]}>
            <Button text={"Order Now"} baccolor={"primary"} />
            <Button text={"Food Details"} baccolor={"white"} />
          </div>
        </div>
        <div className={styles["right"]}>
          {" "}
          <img src={HeaderImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
