import React from "react";

import { Container, Title } from "./styled";

import Switch from "../Switch";

const Navbar: React.FC = () => {
  return (
    <Container>
      <Title>Todo List</Title>
      <Switch />
    </Container>
  );
};

export default React.memo(Navbar);
