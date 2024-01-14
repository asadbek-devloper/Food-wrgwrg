import React from "react";
import styles from "./Menu.module.css";
import Button from "./../../helper/Button/Button1";

const Menu = (props) => {
  console.log(props.data);
  return (
    <div className={styles["menu"]}>
      <div className={styles["title"]}>
        <h3>menu</h3>
        <h2>Food Full of treaty Love</h2>
        <p>
          There are many things are needed to start the Fast Food Business. You
          need not only Just Food Stalls with Persons but also specialized
          equipment, Skills to manage Customers,
        </p>
      </div>

      <div className={styles["menu-card"]}>
        {props.data.map((d) => {
          console.log(d);
          return (
            <div className={styles["menu-card-itme"]}>
              <div className={styles["menu-card-img"]}>
                <img src={d.Image} alt="" />
              </div>
              <div className={styles[`about`]}>
                <div className={styles["card-title"]}>
                  <p>{d.name}</p>
                  <p>{d.price}</p>
                </div>
                <p>{d.about}</p>
                <div className={styles["btns"]}>
                  <Button text={"+"} baccolor={"primary"} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div>
        <Button text={"Learn More"} baccolor={"white"} />
      </div>
    </div>
  );
};

export default Menu;
