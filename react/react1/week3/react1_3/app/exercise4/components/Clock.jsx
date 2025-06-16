/* Create a new component called Clock.
Use the useState hook to manage the current time.
Use the useEffect hook to set up an interval that updates the time every second.
Implement the cleanup function in useEffect to clear the interval when the component unmounts.
Render the current time in the component. */

"use client";

import React, { useState, useEffect } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log("Clock component mounted", time);

    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      console.log("Clock component unmounted");
      clearInterval(interval);
    };
  }, []);

  return <div>{time.toLocaleTimeString()}</div>;
}
