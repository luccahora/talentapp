import styled from "styled-components/native";

export const Container = styled.View`
  border-radius: 15px;
  margin-top: 20px;
`;

export const ImageContainer = styled.View<{ width?: number; height?: number }>`
  width: ${(props) => (props.width ? `${props.width}px` : "auto")};
  height: ${(props) => (props.height ? `${props.height}px` : "auto")};
  position: relative;
`;

export const BackgroundImage = styled.Image`
  flex: 1;
  border-radius: 16px;
`;

export const TextContainer = styled.View`
  position: absolute;
  padding: 10px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: 20px;
  margin-top: 15px;
  margin-left: 10px;
`;

export const ContainerButton = styled.View`
  width: 180px;
  height: 65px;
  margin-top: 15px;
  padding-top: 5px;
  background-color: ${({ theme }) => theme.COLORS.GREEN};
  border-radius: 10px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: 18px;
  margin-top: 15px;
`;
