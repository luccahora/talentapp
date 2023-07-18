import React, { FC } from "react";
import { ImageURISource } from "react-native";
import {
  Container,
  ImageContainer,
  BackgroundImage,
  TextContainer,
  ContainerButton,
  ButtonText,
  Text,
} from "./styles";

interface BannerProps {
  imageSource: ImageURISource;
  text: string;
  imageWidth?: number;
  imageHeight?: number;
  buttonText?: string;
}

const Banner: FC<BannerProps> = ({
  imageSource,
  text,
  imageWidth,
  imageHeight,
  buttonText,
}) => {
  return (
    <Container>
      <ImageContainer width={imageWidth} height={imageHeight}>
        <BackgroundImage source={imageSource} resizeMode="cover" />
        <TextContainer>
          <Text>{text}</Text>
          <ContainerButton>
            <ButtonText>{buttonText}</ButtonText>
          </ContainerButton>
        </TextContainer>
      </ImageContainer>
    </Container>
  );
};

export default Banner;
