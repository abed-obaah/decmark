import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider } from "@src/constants/styled-components";
import useTheme from "@src/hooks/useAppTheme";
import * as NavigationBar from "expo-navigation-bar";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setUserInfo } from "@src/redux/authSlice";
import { useAppDispatch, useAppSelector } from "@src/hooks/useAppStore";
import type { RootStackParamList } from "../@types/navigation";

import AuthStackNavigator from "./AuthStackNavigator";
import BottomTabNavigator from "./BottomTabNavigator";
import ProfileStackNavigator from "./ProfileStackNavigator";
import ServiceStackNavigator from "./ServiceStackNavigator";
import VerificationStackNavigator from "./VerificationStackNavigator";
import OthersStackNavigator from "./OthersStackNavigator";
import { Platform } from "react-native";
import WalletStackNavigator from "./WalletStackNavigator";
import PayWithCardScreen from "./WalletStackNavigator";

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const { userInfo, success } = useAppSelector((state) => state.auth);

  Platform.OS === 'android'&&  NavigationBar.setBackgroundColorAsync(theme.NAVBAR_BACKGROUND_COLOR);
  Platform.OS === 'android'&&  NavigationBar.setButtonStyleAsync(theme.NAVBAR_BUTTON_COLOR);

  useEffect(() => {
    getUserInfo();
  }, [success]);

  const getUserInfo = async () => {
    try {
      const info = await AsyncStorage.getItem("user_info");
      dispatch(setUserInfo(info != null ? JSON.parse(info) : null));
    } catch (e) {
      // error reading value
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style={theme.STATUS_BAR_STYLE} />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="AuthStack"
        >
          {!userInfo ? (
            <Stack.Screen name="AuthStack" component={AuthStackNavigator} />
          ) : (
            <>
              <Stack.Screen
                name="BottomTabNavigator"
                component={BottomTabNavigator}
              />
              <Stack.Screen
                name="ProfileStack"
                component={ProfileStackNavigator}
              />
              <Stack.Screen
                name="ServiceStack"
                component={ServiceStackNavigator}
              />
               <Stack.Screen
                name="VerificationStack"
                component={VerificationStackNavigator}
              />
                <Stack.Screen
                name="OthersStack"
                component={OthersStackNavigator}
              />
               <Stack.Screen
                name="WalletStack"
                component={WalletStackNavigator}
              />
               
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default RootNavigator;
