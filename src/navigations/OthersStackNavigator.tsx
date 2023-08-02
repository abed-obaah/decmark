import React from "react";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import type { RootStackParamList } from "../@types/navigation";
import ChattingScreen from "@src/screens/MessageScreen/ChattingScreen";

const Stack = createStackNavigator<RootStackParamList>();

const OthersStackNavigator = () => {

  const options: StackNavigationOptions = {
    headerShown: false,
  }

  return (
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen
        name="ChattingScreen"
        component={ChattingScreen}
      />
    </Stack.Navigator>
  );
};

export default OthersStackNavigator;
