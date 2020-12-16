import React, { useState } from "react";

const Tour = ({ id, image, info, price, name }) => {
  return (
    <div>
      <img src={image} alt={name} height="400" width="650" />
      <h4>{name}</h4>
      <h4>${price}</h4>
      <p>{info}</p>
      <button>not interested</button>
    </div>
  );
};

export default Tour;
