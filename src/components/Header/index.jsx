import React from "react";

import { Header, Heading } from "./styles";

export default function HeaderComponent(props) {
  return (
    <Header className="d-flex mt-3">
      <Heading>{props.children}</Heading>
    </Header>
  );
}
