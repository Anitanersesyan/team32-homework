"use client";
import ClickCounter from "./components/ClickCounter";
import Button from "./components/ClickCounter";

export default function Page() {
  return (
    <ClickCounter text="Click Me" onClick={() => console.log("Clicked")} />
  );
}
