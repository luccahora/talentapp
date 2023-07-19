import React, { useState } from "react";
import {
  Container,
  ContainerCreateAccount,
  CreateAcconunt,
  Description,
  Title,
} from "./styles";
import Brand from "@components/Brand";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { getRealm } from "src/database/realm";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { Alert } from "react-native";
import uuid from "react-native-uuid";

export function SignUp() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  console.log(name);
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleBack() {
    navigation.goBack();
  }

  async function handleRegister() {
    const realm = await getRealm();

    try {
      realm.write(() => {
        const created = realm.create("user", {
          _id: uuid.v4(),
          name,
          surname,
          email,
          password,
          created_at: new Date(),
        });
        console.log("created", created);
      });

      Alert.alert("User registered");
      handleBack();
    } catch {
      Alert.alert("Error registration");
    } finally {
      realm.close();
    }
  }

  return (
    <Container>
      <Brand />
      <Title>Sign Up</Title>
      <Input label={"Name"} onChangeText={setName} />
      <Input label={"Surname"} onChangeText={setSurname} />
      <Input label={"Email"} onChangeText={setEmail} />
      <Input label={"Password"} secureTextEntry={true} />
      <Input
        label={"Password"}
        secureTextEntry={true}
        onChangeText={setPassword}
      />

      <Button title={"Register"} onPress={handleRegister} />
    </Container>
  );
}
