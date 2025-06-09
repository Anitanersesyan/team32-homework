/* Create a new component called Card.
Accept title, description, and imageUrl as props.
Use destructuring to extract the props.
Render a card-like structure with the provided title, description, and imageUrl. */

"use client";
import React from "react";

function Card({ title, description, imageUrl, width, height }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={imageUrl} alt={title} width={width} height={height} />
    </div>
  );
}

export default Card;
