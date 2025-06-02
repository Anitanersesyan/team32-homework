//Create a functional component called ProfileImage that renders an image of a person.

"use client";
import React from "react";
import styles from "./components.module.css";

function ProfileImage() {
  return (
    <img
      src="/blank-profile-picture-973460_1280.png"
      alt="Profile"
      className={styles.profileImage}
    />
  );
}

export default ProfileImage;
