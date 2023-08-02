import styled from "@src/constants/styled-components";
import { SIZES } from "@src/constants/theme";
import { COLORS } from "@src/constants/theme";

export const XtraLargeText = styled.Text`
  color: ${({ theme }) => theme.PRIMARY_TEXT_COLOR};
  font-size: ${SIZES.xl}px;
  font-family: "SourceSansPro-SemiBold";
`;

export const LargeText = styled.Text`
  color: ${({ theme }) => theme.PRIMARY_TEXT_COLOR};
  font-size: ${SIZES.lg}px;
 font-family: "SourceSansPro-SemiBold";
`;

export const MediumText = styled.Text`
  color: ${({ theme }) => theme.SECONDARY_TEXT_COLOR};
  font-size: ${SIZES.md}px;
  font-family: "SourceSansPro-Regular";
`;

export const SmallText = styled.Text`
  color: ${({ theme }) => theme.SECONDARY_TEXT_COLOR};
  font-size: ${SIZES.sm}px;
  font-family: "SourceSansPro-Regular";
`;

export const LinkText = styled.Text`
  color: ${({ theme }) => theme.GOLDEN_TEXT};
  font-family: "SourceSansPro-Regular";
`;

export const ErrorText = styled.Text`
  color: ${COLORS.red};
  font-family: "SourceSansPro-Regular";
`;
