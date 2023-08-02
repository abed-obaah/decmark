import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import type { RootStackParamList } from "../@types/navigation";
import AccountVerification from "@src/screens/Verification/AccountVerification";
import OTPScreen from "@src/screens/Verification/OTPScreen";
import UploadScreen from "@src/screens/Verification/UploadScreen";
import TakeSnapshot from "@src/screens/Verification/TakeSnapshot";

const Stack = createStackNavigator<RootStackParamList>();

const VerificationStackNavigator = () => {

  const options: StackNavigationOptions = {
    headerShown: false,
  };

  return (
    <Stack.Navigator screenOptions={options} initialRouteName='AccountVerification'>
      <Stack.Screen
        name="AccountVerification"
        component={AccountVerification}
      />
       <Stack.Screen
        name="OTPScreen"
        component={OTPScreen}
      />
      <Stack.Screen
        name="UploadScreen"
        component={UploadScreen}
      />
      <Stack.Screen
        name="TakeSnapshot"
        component={TakeSnapshot}
      />
    </Stack.Navigator>
  );
};

export default VerificationStackNavigator;
