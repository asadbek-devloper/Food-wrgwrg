import { useState } from "react";
import Layout from "./companents/Layout/Layout";
import styles from "./App.module.css";
import Features from "./companents/UI/Features/Features";
import AboutUs from "./companents/UI/AboutUs/AboutUs";
import Menu from "./companents/UI/Menu/Menu";
import { data } from "./assets/data";

function App() {
  return (
    <div className={styles["container"]}>
      <Layout>
        <Features />
        <AboutUs />
      </Layout>
      <Menu data={data} />
    </div>
  );
}

export default App;
