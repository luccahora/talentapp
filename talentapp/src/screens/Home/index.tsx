import React from "react";
import { Container, Header, Photo, Right } from "./styles";
import HamburgerSvg from "@assets/hamburguer.svg";
import BellSvg from "@assets/bell.svg";

export function Home() {
  return (
    <Container>
      <Header>
        <HamburgerSvg />
        <Right>
          <BellSvg />
          <Photo source={require("@assets/imageProfile.png")} />
        </Right>
      </Header>
    </Container>
  );
}
