import React, { useState } from "react";
import { Col, Card, CardImg, Button, CardGroup } from "react-bootstrap";

const Movie = ({ id, image, info, price, name, removeMovie }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <Col md="4" style={{ padding: 0 }}>
      <CardGroup>
        <Card>
          <CardImg
            className="card-img-top"
            src={image}
            alt={name}
            width="100%"
          />
          <Card.Body>
            <Card.Title tag="h5">{name}</Card.Title>
            <Card.Subtitle tag="h6" className="mb-2 text-muted">
              ${price}
            </Card.Subtitle>
            <Card.Text>
              {readMore ? info : `${info.substring(0, 200)}...`}
              <button
                className="readMorebtn"
                onClick={() => setReadMore(!readMore)}
              >
                {readMore ? "show less" : "read more"}
              </button>
            </Card.Text>
            <Button onClick={() => removeMovie(id)}>Not interested</Button>
          </Card.Body>
        </Card>
      </CardGroup>
    </Col>
  );
};

export default Movie;
