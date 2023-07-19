import React, { useState } from "react";
import { Container, Title } from "./styles";
import Brand from "@components/Brand";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { createUser } from "../../database/realm";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { Alert } from "react-native";

export function SignUp() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleBack() {
    navigation.goBack();
  }

  const handleRegister = () => {
    createUser(name, email, surname, password);
    Alert.alert("User registered");
    handleBack();
  };

  return (
    <Container>
      <Brand />
      <Title>Sign Up</Title>
      <Input label={"Name"} onChangeText={setName} />
      <Input label={"Surname"} onChangeText={setSurname} />
      <Input label={"Email"} onChangeText={setEmail} />
      <Input
        label={"Password"}
        secureTextEntry={true}
        onChangeText={setPassword}
      />
      <Input
        label={"Password"}
        secureTextEntry={true}
        onChangeText={setConfirmPassword}
      />

      <Button title={"Register"} onPress={handleRegister} />
    </Container>
  );
}
