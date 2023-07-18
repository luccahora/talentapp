import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  margin: 23px;
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

export const Categories = styled.View`
  margin-top: 20px;
`;

export const CategoriesTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: 16px;
`;

export const CategoryOptions = styled.View`
  margin-top: 20px;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`;

export const Option = styled.TouchableOpacity`
  align-items: center;
`;

export const OptionDescription = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: 12px;
  margin-top: 20px;
`;
