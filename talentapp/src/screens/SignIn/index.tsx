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
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { useAuth } from "../../hooks/useAuth";

export function SignIn() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleSignIn(email: string, password: string) {
    signIn(email, password);
  }

  return (
    <Container>
      <Brand />
      <Title>Login</Title>
      <Input label={"Email"} onChangeText={setEmail} />
      <Input
        label={"Password"}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Button title={"Log In"} onPress={() => handleSignIn(email, password)} />
      <Description>Or continue with</Description>
      <ContainerCreateAccount>
        <Description>Don’t have account? </Description>
        <CreateAcconunt onPress={() => navigation.navigate("signUp")}>
          <Description bold={true}>Create now</Description>
        </CreateAcconunt>
      </ContainerCreateAccount>
    </Container>
  );
}
