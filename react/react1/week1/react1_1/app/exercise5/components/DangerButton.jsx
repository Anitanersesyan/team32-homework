/* Create a functional component called DangerButton that renders a button element with a dangerous text and a className prop set to btn btn-primary.*/
"use client";
import React from "react";
import styles from "./components.module.css";

function DangerButton() {
  return (
    <button className={` ${styles.btn} ${styles.btnDanger}`}>Danger</button>
  );
}

export default DangerButton;
