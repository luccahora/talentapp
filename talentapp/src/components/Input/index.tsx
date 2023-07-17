import React from "react";
import { TextInputProps, View } from "react-native";
import { Container, InputText, Label } from "./styles";
import { TextInput } from "react-native";

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
  label: string;
};

export function Input({ inputRef, label, ...rest }: Props) {
  return (
    <Container ref={inputRef}>
      <Label>{label}</Label>
      <InputText {...rest} />
    </Container>
  );
}
