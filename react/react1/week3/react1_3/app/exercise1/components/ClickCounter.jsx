/* Create a ClickCounter component (10 minutes)
Create a new component called ClickCounter.
Use the useState hook to manage a count state variable.
Implement an onClick event handler function that increments the count.
Render a button and display the current value of count. */

"use client";

import React from "react";

export default function ClickCounter({ text, onClick }) {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(count + 1);
    onClick();
  };

  return (
    <button onClick={handleClick}>
      {text} - Clicked {count} times
    </button>
  );
}
