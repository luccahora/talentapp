import React from "react";
import {
  Container,
  Description,
  Header,
  Photo,
  Right,
  SearchContainer,
  Title,
} from "./styles";
import HamburgerSvg from "@assets/hamburguer.svg";
import BellSvg from "@assets/bell.svg";
import InputFilter from "@components/InputFilter";

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
      <SearchContainer>
        <Title>Hello, Maria 👋🏻</Title>
        <Description>What do you wanna donate today?</Description>
        <InputFilter />
      </SearchContainer>
    </Container>
  );
}
