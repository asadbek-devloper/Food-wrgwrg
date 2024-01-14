import React from "react";
import styles from "./Features.module.css";
import CardImg1 from "../../../assets/icons/Group 94.svg";
import CardImg2 from "../../../assets/icons/food-delivery.svg";
import CardImg3 from "../../../assets/icons/Group 93.svg";
const Features = () => {
  return (
    <div className={styles["features"]}>
      <div className={styles["title"]}>
        <p>Features</p>
        <h2>Food with a New Passion</h2>
      </div>
      <div className={styles["features-card"]}>
        <div className={styles["features-card-itme"]}>
          <div className={styles["features-card-img"]}>
            <img src={CardImg1} alt="" />
          </div>
          <div className={styles["features-card-title"]}>
            <h2>Quality Food</h2>
            <p>
              It can be a very secure path to earn good money and make you very
              successful creative entrepreneur.
            </p>
          </div>
        </div>
        <div className={styles["features-card-itme"]}>
          <div className={styles["features-card-img"]}>
            <img src={CardImg2} alt="" />
          </div>
          <div className={styles["features-card-title"]}>
            <h2>Food Delivery</h2>
            <p>
              It can be a very secure path to earn good money and make you very
              successful creative entrepreneur.
            </p>
          </div>
        </div>
        <div className={styles["features-card-itme"]}>
          <div className={styles["features-card-img"]}>
            <img src={CardImg3} alt="" />
          </div>
          <div className={styles["features-card-title"]}>
            <h2>Super Taste</h2>
            <p>
              It can be a very secure path to earn good money and make you very
              successful creative entrepreneur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
