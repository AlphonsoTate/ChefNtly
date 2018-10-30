import React from "react";
import { Row, Input, Col } from "react-materialize";

const search = () => (
  <Row className="container">
  <Col s={6}>
    <Input
      className="#ffd54f "
      s={6}
      label="City"
      validate
      defaultValue="Chicago"
    />
    </Col>
    <Col s={6}>
    <Input
      className="#ffd54f "
      s={6}
      label="Cuisine"
      validate
      defaultValue="Pizza"
    />
    </Col>
  </Row>
);
export default search;
