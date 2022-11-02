import React from "react";
import { Home } from "../Home";
import { Container, Wrapper } from "./styles";

const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Home/>
      </Wrapper>
    </Container>
  );
};

export default Layout;