import React from "react";
import { View, Text, ScrollView } from "react-native";
import {
  ChangePhoto,
  Container,
  Description,
  InfoUser,
  Title,
  UserData,
  UserPhoto,
} from "./styles";
import CameraSvg from "@assets/camera.svg";
import PenSvg from "@assets/pen.svg";
import Card from "@components/Card";

export function Profile() {
  return (
    <Container>
      <UserPhoto source={require("@assets/imageBackground.png")} />
      <UserData>
        <ChangePhoto>
          <CameraSvg />
        </ChangePhoto>

        <InfoUser>
          <View>
            <Title>Maria Isadora</Title>
            <Description>mariaissa@gmail.com</Description>
          </View>
          <PenSvg />
        </InfoUser>

        <Card title="Settings" />
        <Card title="Pending reviews" />
        <Card title="Faq" />
        <Card title="Help" />
      </UserData>
    </Container>
  );
}
