import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  margin-top: 15px;
`;

export const MovieItem = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  margin: 8px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const MovieImage = styled.Image`
  width: 100px;
  height: 150px;
  border-radius: 8px;
`;

export const MovieDetails = styled.View`
  flex: 1;
  margin-left: 16px;
`;

export const MovieTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const MovieOverview = styled.Text`
  margin-top: 8px;
  font-size: 14px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;
