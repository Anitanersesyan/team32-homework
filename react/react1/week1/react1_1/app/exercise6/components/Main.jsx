"use client";
import React from "react";
import WhyUs from "./Why-us";
import Product1 from "./Product1";
import Product2 from "./Product2";
import styles from "./styles.module.css";

function Main() {
  return (
    <main className={styles.main}>
      <WhyUs />
      <Product1 />
      <Product2 />
    </main>
  );
}

export default Main;
