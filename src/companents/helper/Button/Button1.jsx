import React from "react";
import styles from "./Button.module.css";
const Button = (props) => {
  return (
    <button className={`${styles["btn"]}  ${styles[props.baccolor]}`}>
      {props.text}
    </button>
  );
};

export default Button;
