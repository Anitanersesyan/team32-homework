/* Create a functional component called Button that renders a button element with a className prop set to btn btn-primary*/
"use client";
import React from "react";
import styles from "./components.module.css";

function Button() {
  return (
    <button className={`${styles.btn} ${styles.btnPrimary}`}>Click Me</button>
  );
}

export default Button;
