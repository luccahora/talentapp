import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  margin-top: 15px;
`;

export const Text = styled.View`
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: 24px;
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: 14px;
`;
