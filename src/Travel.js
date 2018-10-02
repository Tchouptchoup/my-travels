// src/Travel.js
import React from "react";

const Travel = ({ photo, destination, country, distance }) => (
  <figure>
    <figcaption>
      <div>{destination}</div>
      <div>{country}</div>
    </figcaption>
    <img
      src={photo}
      alt={destination}
    />
    <figcaption>
      <div>{distance}</div>
    </figcaption>
  </figure>
);

export default Travel;