import styled from "styled-components/native";

interface DescriptionProps {
  bold?: boolean;
}

export const Container = styled.SafeAreaView`
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: 32px;
  margin-top: 50%;
`;

export const Description = styled.Text<DescriptionProps>`
  color: ${({ theme, bold }) =>
    bold ? theme.COLORS.BLACK : theme.COLORS.GRAY};
  font-family: ${({ theme, bold }) =>
    bold ? theme.FONT_FAMILY.BOLD : theme.FONT_FAMILY.REGULAR};
  font-size: 14px;
  margin-top: 30px;
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
`;

export const ContainerCreateAccount = styled.View`
  flex-direction: row;
`;

export const CreateAcconunt = styled.TouchableOpacity`
  color: ${({ theme }) => theme.COLORS.GRAY};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: 14px;
`;
