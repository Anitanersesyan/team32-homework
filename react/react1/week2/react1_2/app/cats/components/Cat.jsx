"use client";

import { useState } from "react";

export default function Cat({ name, age }) {
  const [nameInternal, setNameInternal] = useState("");

  const handleChange = (event) => {
    console.log("handleChange", event.target.value);
    setNameInternal(event.target.value);
  };

  return (
    <>
      <label>
        Name:
        <input value={nameInternal} onChange={handleChange} />
      </label>
      <div>Name: {nameInternal}</div>
      <div>Age: {age}</div>
      <div>In 2 years: {age + 2}</div>
      <div>{age >= 7 ? "Insurance is expensive" : "Insurance is cheap"}</div>
    </>
  );
}
