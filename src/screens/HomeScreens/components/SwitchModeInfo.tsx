import React, { useEffect } from "react";
import { StyleSheet, Platform, Image, NativeModules } from "react-native";
import { useAppDispatch } from "@src/hooks/useAppStore";
import { AppSafeAreaView, AppView } from "@src/components/AppViews";
import { MediumText, XtraLargeText } from "@src/components/AppText";
import useSwitchUserMode from "@src/hooks/useSwitchUserMode";
import useAppTheme from "@src/hooks/useAppTheme";
import { toggleIsModeSwitch } from "@src/redux/appSlice";

const { StatusBarManager } = NativeModules;

const SwitchModeInfo = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppTheme();
  const { userMode } = useSwitchUserMode();

  useEffect(() => {
    setTimeout(() => dispatch(toggleIsModeSwitch(false)), 2000);
  }, []);

  return (
    <AppSafeAreaView style={styles.container}>
      <AppView
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 20,
        }}
      >
        <Image
          source={require("@src/assets/images/logo.png")}
          style={{
            width: 35,
            height: 35,
          }}
        />
        <XtraLargeText>DecMark</XtraLargeText>
      </AppView>
      <AppView
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <MediumText style={{ color: theme.PRIMARY_TEXT_COLOR }}>
          Welcome to
        </MediumText>
        <XtraLargeText style={{ fontSize: 60, textTransform: "capitalize" }}>
          {userMode}
          <MediumText style={{ color: theme.GOLDEN_TEXT }}> Mode</MediumText>
        </XtraLargeText>
      </AppView>
    </AppSafeAreaView>
  );
};

export default SwitchModeInfo;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "android" ? StatusBarManager.HEIGHT : 0,
  },
});
