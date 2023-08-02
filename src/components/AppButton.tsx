import { FC } from "react";
import { Text, TouchableOpacity } from "react-native";
import { COLORS, SIZES } from "@src/constants/theme";
import useAppTheme from "@src/hooks/useAppTheme";

interface IAppButton {
  label?: string;
  background?: string;
  marginTop?: number;
  radius?: number;
  buttonHeight?: number;
  onPress?: () => void;
  disabled?: boolean;
}

const AppButton: FC<IAppButton> = ({
  label,
  marginTop,
  background,
  radius,
  buttonHeight,
  onPress,
  disabled,styles,
  ...props
}) => {
  const { theme } = useAppTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width:'100%',flexDirection:'row',flexShrink:1,
        height: buttonHeight ? buttonHeight : 50,
        backgroundColor: disabled
          ? COLORS.lightGold
          : background
          ? background
          : COLORS.gold,
        borderRadius: radius ? radius : SIZES.radius,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: disabled ? COLORS.lightGold : COLORS.gold,
        marginTop: marginTop ? marginTop : 25,
        ...styles
      }}
      {...props}
    >
      <Text
        style={{
          color: disabled
            ? COLORS.lightGrey
            : background
            ? theme.PRIMARY_TEXT_COLOR
            : COLORS.light,
          fontSize: SIZES.md,
          fontFamily: "SourceSansPro-Regular"

        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default AppButton;
