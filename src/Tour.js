import React, { useState } from "react";

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div>
      <img src={image} alt={name} height="400" width="650" />
      <h4>{name}</h4>
      <h4>${price}</h4>
      <p>
        {readMore ? info : `${info.substring(9, 200)}...`}
        <button onClick={() => setReadMore(!readMore)}>
          {readMore ? "show less" : "read more"}
        </button>
      </p>
      <button onClick={() => removeTour(id)}>not interested</button>
    </div>
  );
};

export default Tour;
