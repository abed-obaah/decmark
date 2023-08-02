import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { LargeText } from "@src/components/AppText";
import { AppSafeAreaView, AppScrollView } from "@src/components/AppViews";
import AppInput from "@src/components/AppInput";
import AppButton from "@src/components/AppButton";
import AppTextarea from "@src/components/AppTextarea";

const ChangeLanguageScreen = () => {
  return (
    <AppSafeAreaView>
      <AppScrollView>
        <View style={styles.container}>
          <LargeText style={styles.largeText}>English</LargeText>
          <View style={styles.space}></View>
          <TouchableOpacity style={styles.button}>
            <LargeText style={styles.buttonText}>Default</LargeText>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <LargeText style={styles.largeText}>Yoruba</LargeText>
          <View style={styles.space}></View>
          <View style={styles.space}></View>
        </View>
        <View style={styles.container}>
          <LargeText style={styles.largeText}>Igbo</LargeText>
          <View style={styles.space}></View>
          <View style={styles.space}></View>
        </View>
        <View style={styles.container}>
          <LargeText style={styles.largeText}>Hausa</LargeText>
          <View style={styles.space}></View>
          <View style={styles.space}></View>
        </View>
        <View style={styles.container}>
          <LargeText style={styles.largeText}>French</LargeText>
          <View style={styles.space}></View>
          <View style={styles.space}></View>
        </View>
        <View style={styles.container}>
          <LargeText style={styles.largeText}>Pidgin</LargeText>
          <View style={styles.space}></View>
          <View style={styles.space}></View>
        </View>
      </AppScrollView>
    </AppSafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 20,
  },
  largeText: {
    marginRight: 10,
    flex: 1, // Added flex property
  },
  space: {
    width: 80,
  },
  button: {
    backgroundColor: "#DEB253",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  buttonText: {
    color: "black",
  },
});

export default ChangeLanguageScreen;
