"use client";

import styles from "./components/components.module.css";

import Button from "./components/Button";
import DangerButton from "./components/DangerButton";
import TextInput from "./components/TextInput";
import ProfileImage from "./components/ProfileImage";

export default function Page() {
  return (
    <main>
      <h1>Exercise 5</h1>
      <div className={styles.flexRow}>
        <ProfileImage />
        <TextInput />
      </div>
      <div className={styles.buttonGroup}>
        <Button />
        <DangerButton />
      </div>
    </main>
  );
}
