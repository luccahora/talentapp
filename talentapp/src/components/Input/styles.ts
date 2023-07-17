import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: column;
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: 12px;
  margin-left: 12px;
`;

export const InputText = styled.TextInput`
  width: 311px;
  margin: 12px;
  border-bottom-width: 1px;
`;
