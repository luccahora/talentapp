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

export function SignUp() {
  return (
    <Container>
      <Brand />
      <Title>Sign Up</Title>
      <Input label={"Name"} />
      <Input label={"Surname"} />
      <Input label={"Email"} />
      <Input label={"Password"} secureTextEntry={true} />
      <Input label={"Password"} secureTextEntry={true} />

      <Button title={"Register"} />
    </Container>
  );
}
