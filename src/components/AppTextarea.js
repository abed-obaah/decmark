import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { COLORS, SIZES } from "../constants/theme";
import { Feather } from "@expo/vector-icons";
import { MediumText, ErrorText } from "./AppText";
import useTheme from "@src/hooks/useAppTheme";

export default AppTextarea = ({
  label,
  error,
  marginTop,
  onFocus = () => {},
}) => {
  const { theme } = useTheme();
  const [backgroundColor, setBackgroundColor] = useState(
    theme.INPUT_BACKGROUND_COLOR
  );
  const [borderColor, setBorderColor] = useState(theme.PRIMARY_BORDER_COLOR);

  return (
    <View style={{ marginTop: marginTop ? marginTop : 20 }}>
      {label && (
        <MediumText
          style={{
            marginBottom: 3,
            color: theme.PRIMARY_TEXT_COLOR,
          }}
        >
          {label}
        </MediumText>
      )}
      <View
        style={[
          styles.inputContainer,
          { backgroundColor },
          error ? { borderColor: COLORS.red } : { borderColor },
        ]}
      >
        <TextInput
          autoCorrect={false}
          onBlur={() => {
            setBackgroundColor(theme.INPUT_BACKGROUND_COLOR);
            setBorderColor(theme.PRIMARY_BORDER_COLOR);
          }}
          onFocus={() => {
            onFocus();
            setBackgroundColor(theme.PRIMARY_BACKGROUND_COLOR);
            setBorderColor(theme.gold);
          }}
          style={{
            textAlignVertical: "top",
            fontSize: SIZES.md,
            // fontFamily: "FONT_SEMI_BOLD",
            color: theme.PRIMARY_TEXT_COLOR,
          }}
          multiline={true}
          numberOfLines={5}
        />
      </View>
      {error && (
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 4 }}
        >
          <Feather
            name="alert-circle"
            style={{
              color: COLORS.red,
              fontSize: 16,
              paddingRight: 2.5,
            }}
          />
          <ErrorText>{error}</ErrorText>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    padding: 15,
    borderWidth: 1,
    borderRadius: SIZES.radius,
  },
});
