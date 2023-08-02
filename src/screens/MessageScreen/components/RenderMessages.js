import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "@src/constants/theme";
import { SmallText } from "@src/components/AppText";

const RenderMessages = ({ item }) => {
  return (
    <View style={"me" === item.user ? styles.me : styles.other}>
      <SmallText>{item.msg}</SmallText>
    </View>
  );
};

export default RenderMessages;

const styles = StyleSheet.create({
  me: {
    backgroundColor: COLORS.lightGold,
    alignSelf: "flex-end",
    width: "70%",
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    minHeight: 45,
    borderTopRightRadius: 1,
    marginBottom: 10,
    justifyContent: "center",
  },
  other: {
    backgroundColor: COLORS.lightGrey,
    width: "70%",
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    minHeight: 45,
    borderTopLeftRadius: 1,
    marginBottom: 10,
    justifyContent: "center",
  },
});
