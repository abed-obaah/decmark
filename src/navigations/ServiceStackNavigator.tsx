import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import useAppTheme from "@src/hooks/useAppTheme";
import { MaterialIcons } from "@expo/vector-icons";
import type { RootStackParamList } from "../@types/navigation";

import AddServiceScreen from "@src/screens/AddServiceScreen";
import OfferDetailScreen from "@src/screens/OfferDetailScreen";
import AvailableServiceScreen from "@src/screens/AvailableServiceScreen";

const Stack = createStackNavigator<RootStackParamList>();

const ServiceStackNavigator = () => {
  const { theme } = useAppTheme();

  const options: StackNavigationOptions = {
    headerShown: true,
    headerStyle: {
      backgroundColor: theme.PRIMARY_BACKGROUND_COLOR,
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 1,
      borderBottomColor: theme.PRIMARY_BORDER_COLOR,
    },
    headerTitleAlign: "center",
    headerTitleStyle: {
      color: theme.PRIMARY_TEXT_COLOR,
      fontFamily: "SourceSansPro-SemiBold",
    },
    headerBackImage: () => (
      <MaterialIcons name="west" size={24} color={theme.SECONDARY_TEXT_COLOR} />
    ),
  };

  return (
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen
        name="AddServiceScreen"
        component={AddServiceScreen}
        options={{ headerTitle: "Create service" }}
      />
      <Stack.Screen
        name="OfferDetailScreen"
        component={OfferDetailScreen}
        options={{ headerTitle: "Offer details" }}
      />
      <Stack.Screen
        name="AvailableServiceScreen"
        component={AvailableServiceScreen}
        options={{ headerTitleAlign: "left" }}
      />
    </Stack.Navigator>
  );
};

export default ServiceStackNavigator;
