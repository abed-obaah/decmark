import { useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import { ErrorText } from "./AppText";
import { COLORS, SIZES } from "../constants/theme";
import useAppTheme from "../hooks/useAppTheme";
import { Feather, Ionicons } from "@expo/vector-icons";
import axios from "axios";

export default AppSearchInput = ({ error, onPress, onFocus, placeholder, handleSearch }) => {
  const { theme } = useAppTheme();
  const [backgroundColor, setBackgroundColor] = useState(
    theme.INPUT_BACKGROUND_COLOR
  );
  const [borderColor, setBorderColor] = useState(theme.PRIMARY_BORDER_COLOR);

  return (
    <View>
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
            setBackgroundColor(theme.PRIMARY_BACKGROUND_COLOR);
            setBorderColor(theme.gold);
          }}
          style={{
            flex: 1,
            height: "100%",
            fontSize: SIZES.md,
            color: theme.PRIMARY_TEXT_COLOR,
            fontFamily: "SourceSansPro-Regular",
          }}
          placeholder={placeholder}
          placeholderTextColor={theme.SECONDARY_TEXT_COLOR}
        />
        <TouchableOpacity
          onPress={() => handleSearch()} // Call the handleSearch function
          style={{
            backgroundColor: theme.gold,
            borderRadius: SIZES.radius,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            borderColor: theme.gold,
            padding: 5,
            paddingHorizontal: 7,
          }}
        >
          <Ionicons name="search-outline" size={20} color="black" />
        </TouchableOpacity>
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
    height: 50,
    flexDirection: "row",
    paddingLeft: 15,
    paddingRight: 10,
    borderWidth: 1,
    borderRadius: SIZES.radius,
    alignItems: "center",
  },
});
