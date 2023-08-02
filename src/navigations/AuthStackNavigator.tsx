import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useAppTheme from "@src/hooks/useAppTheme";
import { MaterialIcons } from "@expo/vector-icons";
import { useAppSelector } from "@src/hooks/useAppStore";
import AppLoader from "@src/components/ui/AppLoader";
import AppAlert from "@src/components/ui/AppAlert";
import type { RootStackParamList } from "../@types/navigation";

import Onboarding from "../screens/Onboarding/index";
import WelcomeScreen from "@src/screens/WelcomeScreen";
import LogIn from "@src/screens/LogIn";
import SignUp from "@src/screens/SignUp";
import SignUpWithNumber from "@src/screens/SignUp/SignUpWithNumber";
import OTPScreen from "@src/screens/OTPScreen";
import ForgotPasswordScreen from "@src/screens/ForgotPasswordScreen";

const Stack = createStackNavigator<RootStackParamList>();

const AuthStackNavigator = () => {
  const { isLoading, error } = useAppSelector((state) => state.auth);
  const { theme } = useAppTheme();
  const [isAppFirstLaunch, setIsAppFirstLaunch] = useState<boolean | null>(
    null
  );

  useEffect(() => {
    handleAppFirstLaunch();
  }, []);

  const handleAppFirstLaunch = async () => {
    const appData = await AsyncStorage.getItem("isAppFirstLaunch");
    if (appData === null) {
      setIsAppFirstLaunch(true);
      AsyncStorage.setItem("isAppFirstLaunch", "false");
    } else {
      setIsAppFirstLaunch(false);
    }
  };

  return (
    isAppFirstLaunch !== null && (
      <>
        {isLoading && <AppLoader />}
        {error && <AppAlert message={error} />}
        <Stack.Navigator
          screenOptions={{
            headerShown: true,
            headerStyle: {
              backgroundColor: theme.PRIMARY_BACKGROUND_COLOR,
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            },
            headerTitleAlign: "center",
            headerTitleStyle: {
              color: theme.PRIMARY_TEXT_COLOR,
              // fontFamily: "FONT_SEMI_BOLD",
            },
            headerTintColor: theme.SECONDARY_TEXT_COLOR,
            headerBackImage: () => (
              <MaterialIcons
                name="west"
                size={24}
                color={theme.SECONDARY_TEXT_COLOR}
              />
            ),
            headerLeft:()=>null
          }}
          initialRouteName={isAppFirstLaunch ? "Onboarding" : "WelcomeScreen"}
        >
          {isAppFirstLaunch && (
            <Stack.Screen
              name="Onboarding"
              component={Onboarding}
              options={{ headerShown: false }}
            />
          )}
          <Stack.Screen
            name="WelcomeScreen"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LogIn"
            component={LogIn}
            options={{ headerTitle: "Account Login" }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ headerTitle: "" }}
          />
          <Stack.Screen
            name="SignUpWithNumber"
            component={SignUpWithNumber}
            options={{ headerTitle: "Create Account" }}
          />
          <Stack.Screen
            name="OTPScreen"
            component={OTPScreen}
            options={{ headerTitle: "Verification" }}
          />
          <Stack.Screen
            name="ForgotPasswordScreen"
            component={ForgotPasswordScreen}
            options={{ headerTitle: "Forgot Password" }}
          />
        </Stack.Navigator>
      </>
    )
  );
};

export default AuthStackNavigator;
