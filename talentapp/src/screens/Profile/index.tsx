import React, { useState } from "react";
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
import * as ImagePicker from "expo-image-picker";

export function Profile() {
  const [userPhoto, setUserPhoto] = useState(
    require("@assets/imageBackground.png")
  );

  const openImagePicker = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.canceled === true) {
      return;
    }

    setUserPhoto(pickerResult.assets);
  };

  return (
    <Container>
      <UserPhoto source={userPhoto} />
      <UserData>
        <ChangePhoto onPress={openImagePicker}>
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
