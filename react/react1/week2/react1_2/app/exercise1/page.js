"use client";
import Button from "./components/Button";

export default function Page() {
  return <Button text="Click Me" onClick={() => console.log("Clicked")} />;
}
