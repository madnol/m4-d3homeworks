import React from "react";
import { Badge } from "react-bootstrap";

const MyBadge = prop => {
  return (
    <>
      <h1>
        Example heading <Badge variant={prop.color}>{prop.text}</Badge>
      </h1>
    </>
  );
};

export default MyBadge;
