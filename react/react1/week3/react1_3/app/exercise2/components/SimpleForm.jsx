/* Create a new component called SimpleForm.
Use the useState hook to manage the state of form inputs.
Create input fields for the form (e.g., name, email, message).
Implement a handleSubmit function to handle form submission.
Render the form inputs and a submit button. */

"use client";
import React from "react";
import { useState } from "react";

export default function SimpleForm({ onSubmit }) {
  const [isFormVisible, setIsFormVisible] = useState(false);

  function handleClick() {
    setIsFormVisible(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    console.log("Form submitted:", { name, email, message });

    if (onSubmit) {
      onSubmit({ name, email, message });
    }
    setIsFormVisible(false);
  }

  if (isFormVisible) {
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Message:
          <textarea name="message" />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }

  return <button onClick={handleClick}>Show form</button>;
}
