import React from "react";
import styles from "./AboutUs.module.css";
import AboutImg from "../../../assets/images/about.png";
import Button from "./../../helper/Button/Button1";
const AboutUs = () => {
  return (
    <div className={styles["about-us"]}>
      <div className={styles["left"]}>
        <img src={AboutImg} alt="" />
      </div>
      <div className={styles["right"]}>
        <div className={styles["title"]}>
          <h1>About us</h1>
          <h2>
            Food Stalls with Persons but to Product marketing plane catlogues
            etc to.
          </h2>
          <p>
            There are many things are needed to start the Fast Food Business.
            You need not only Just Food Stalls with Persons but also equipment
            make your marketing plane Effective.
          </p>
        </div>
        <Button text={"Read More"} baccolor={"primary"} />
      </div>
    </div>
  );
};

export default AboutUs;
