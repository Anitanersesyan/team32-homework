// Create a functional component called TextInput that renders a text input field with a placeholder value Type something here.
"use client";

import React from "react";
import styles from "./components.module.css";

function TextInput() {
  return (
    <input
      type="text"
      placeholder="Type something here"
      className={`${styles.TextInput}`}
    ></input>
  );
}

export default TextInput;
