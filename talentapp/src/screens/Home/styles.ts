import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  margin: 15px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Right = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Photo = styled.Image`
  margin-left: 10px;
`;

export const SearchContainer = styled.View`
  margin-top: 15px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.GREEN};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: 24px;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: 16px;
  margin-bottom: 20px;
`;
