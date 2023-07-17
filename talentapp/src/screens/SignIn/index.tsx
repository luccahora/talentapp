import React from "react";
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

export function SignIn() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  return (
    <Container>
      <Brand />
      <Title>Login</Title>
      <Input label={"Email"} />
      <Input label={"Password"} secureTextEntry={true} />
      <Button title={"Log In"} />
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
