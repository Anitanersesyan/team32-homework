"use client";

import Card from "./components/Card";

export default function Page() {
  return (
    <Card
      title="My Card"
      description="This is a description of the card."
      imageUrl={"/image.png"}
      width={100}
      height={100}
    />
  );
}
