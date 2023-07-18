import { Platform } from "react-native";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 365px;
  height: 65px;
  background-color: #fff;
  border-radius: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-bottom: 15px;
  ${Platform.select({
    ios: `
      shadow-color: #000;
      shadow-offset: 0px 10px;
      shadow-opacity: 0.3;
      shadow-radius: 40px;
    `,
    android: `
      elevation: 10;
    `,
  })}
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: 18px;
`;
