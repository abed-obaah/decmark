import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { LargeText } from "../AppText";
import { COLORS, SIZES } from "@src/constants/theme";
import { resetAuth } from "@src/redux/authSlice";
import { useAppDispatch } from "@src/hooks/useAppStore";

const AppAlert = ({ message }) => {
  const dispatch = useAppDispatch();

  return (
    <View style={[StyleSheet.absoluteFillObject, styles.body]}>
      <View style={styles.container}>
        <LargeText style={{ color: COLORS.dark, fontSize: SIZES.lg }}>
          Error
        </LargeText>
        <View>
          <Text style={styles.message}>{message}</Text>
        </View>
        <TouchableOpacity
          onPress={() => dispatch(resetAuth())}
          style={styles.button}
        >
          <Text
            style={{
              color: COLORS.darkGold,
              fontSize: SIZES.md,
            }}
          >
            OK
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppAlert;

const styles = StyleSheet.create({
  body: {
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,.5)",
    zIndex: 1,
  },
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 10,
    borderRadius: 15,
  },
  message: {
    color: "rgba(20, 20, 20, .75)",
    fontSize: SIZES.lg,
    paddingVertical: 25,
    textTransform: "uppercase",
  },
  button: {
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
});
