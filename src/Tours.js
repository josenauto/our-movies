import React, { useState } from "react";
import Tour from "./Tour";
import { Row } from "react-bootstrap";

const Tours = ({ tours, removeTour }) => {
  return (
    <div>
      <div>
        <h2 className="text-center">Our movies</h2>
      </div>
      <div>
        <Row>
          {tours.map((tour) => {
            return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
          })}
        </Row>
      </div>
    </div>
  );
};

export default Tours;
