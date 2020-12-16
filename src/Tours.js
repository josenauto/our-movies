import React, { useState } from "react";
import Tour from "./Tour";

const Tours = ({ tours }) => {
  return (
    <div>
      <div>
        <h2>Our movies</h2>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour}/>;
        })}
      </div>
    </div>
  );
};

export default Tours;
