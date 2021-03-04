import React from "react";

import { Card, CardTitle } from "./styles";

export default function CardComponent(props) {
  return (
    <Card
      className="card d-flex align-items-center justify-content-center"
      style={{
        // backgroundImage: `url(https://static.materate.com/1471486/conversions/card_cover.jpg)`,
        backgroundImage: `url(${props.cover})`,
      }}
    >
      <CardTitle>{props.title}</CardTitle>
    </Card>
  );
}
