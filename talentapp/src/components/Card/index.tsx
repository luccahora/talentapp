import React, { FC } from "react";
import { View } from "react-native";
import { Container, Title } from "./styles";
import ArrowSvg from "@assets/arrow.svg";

interface CardProps {
  title: string;
}

const Card: FC<CardProps> = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <ArrowSvg />
    </Container>
  );
};

export default Card;
