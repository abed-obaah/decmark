import React from "react";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import type { RootStackParamList } from "../@types/navigation";
import FundWalletScreen from "@src/screens/Wallet/FundWalletScreen";
import WithdrawScreen from "@src/screens/Wallet/WithdrawScreen";

const Stack = createStackNavigator<RootStackParamList>();

const WalletStackNavigator = () => {

  const options: StackNavigationOptions = {
    headerShown: false,
  }

  return (
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen
        name="WithdrawScreen"
        component={WithdrawScreen}
      />
       <Stack.Screen
        name="FundWalletScreen"
        component={FundWalletScreen}
      />
    </Stack.Navigator>
  );
};

export default WalletStackNavigator;
