import React from "react";
import {
  StyleSheet,
  Platform,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  NativeModules,
  useWindowDimensions,
} from "react-native";
import AppButton from "@src/components/AppButton";
import useTheme from "@src/hooks/useAppTheme";
import {
  XtraLargeText,
  MediumText,
  SmallText,
  LinkText,
} from "@src/components/AppText";

const { StatusBarManager } = NativeModules;

export default WelcomeScreen = ({ navigation }) => {
  const { theme } = useTheme();
  const { height, width } = useWindowDimensions();

  return (
    <SafeAreaView
      style={{
        ...styles.container,
        backgroundColor: theme.PRIMARY_BACKGROUND_COLOR,
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={"handled"}
      >
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../../assets/images/adaptive-icon.png")}
            style={{
              height: height * 0.35,
              width,
              resizeMode: "contain",
              marginBottom: 5,
            }}
          />
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <XtraLargeText>Welcome to DecMark!</XtraLargeText>
          <MediumText>
            It will only take you couple of minutes to get started.
          </MediumText>
          <AppButton
            label="REGISTER"
            onPress={() => navigation.navigate("SignUp")}
          />
          <AppButton
            label="LOGIN"
            background="transparent"
            marginTop={10}
            onPress={() => navigation.navigate("LogIn")}
          />
        </View>
      </ScrollView>
      <SmallText
        style={{ marginBottom: 35, textAlign: "center", paddingTop: 5 }}
      >
        By creating an account, you agree to our
        <LinkText> Terms and Conditions</LinkText> and
        <LinkText> Policy.</LinkText>
      </SmallText>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    paddingTop: Platform.OS === "android" ? StatusBarManager.HEIGHT : 0,
  },
});
