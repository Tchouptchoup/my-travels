// src/Travel.js
import React from "react";

const Travel = ({photo, destination, country, distance}) => (
  <figure>
    <img
      src={photo}
      alt={destination}
    />
    <figcaption>
      <div>{destination}</div>
      <div>{country}</div>
      <div>{distance}</div>
    </figcaption>
  </figure>
);

export default Travel;