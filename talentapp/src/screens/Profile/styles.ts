import styled from "styled-components/native";

export const Container = styled.SafeAreaView``;

export const UserPhoto = styled.Image`
  width: 100%;
  height: 300px;
`;

export const UserData = styled.View`
  width: 100%;
  height: 450px;
  border-radius: 25px;
  background-color: #ffffff;
  margin-top: -20;
  padding: 15px;
`;

export const ChangePhoto = styled.TouchableOpacity`
  width: 75px;
  height: 75px;
  border-radius: 37.5px;
  background-color: #ffffff;
  align-self: center;
  margin-top: -50;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: 27px;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: 14px;
`;

export const InfoUser = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;
