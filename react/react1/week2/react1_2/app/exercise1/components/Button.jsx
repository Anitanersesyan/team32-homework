/* Create a new component called Button.
Accept text and onClick as props.
Render a button element with the text prop as its content.
Attach the onClick prop to the button's onClick event handler.*/

"use client";

import React from "react";

function Button({ text, onClick }) {
  return <button onClick={onClick}>{text}</button>;
}

export default Button;
