import { View, Image, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import useAppTheme from "@src/hooks/useAppTheme";
import useSwitchUserMode from "@src/hooks/useSwitchUserMode";
import { Ionicons } from "@expo/vector-icons";
import { LargeText } from "@src/components/AppText";
import MyAvatar from "../global/MyAvatar";
import type { RootStackParamList } from "../@types/navigation";

import ReceiverHomeScreen from "@src/screens/HomeScreens/ReceiverHomeScreen";
import ProviderHomeScreen from "@src/screens/HomeScreens/ProviderHomeScreen";
import MyServiceScreen from "@src/screens/MyServiceScreen";
import MessageScreen from "@src/screens/MessageScreen";
import WalletScreen from "@src/screens/WalletScreen";

const Tab = createBottomTabNavigator<RootStackParamList>();

const BottomTabNavigator = ({ navigation }: any) => {
  const { theme } = useAppTheme();
  const { userMode, isModeSwitch } = useSwitchUserMode();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: !isModeSwitch,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          display: isModeSwitch ? "none" : "flex",
          backgroundColor: theme.PRIMARY_BACKGROUND_COLOR,
          paddingVertical: 10,
          borderTopColor: theme.PRIMARY_BORDER_COLOR,
        },
        headerStyle: {
          backgroundColor: theme.PRIMARY_BACKGROUND_COLOR,
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0.5,
          borderBottomColor: theme.PRIMARY_BORDER_COLOR,
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        headerTitleStyle: {
          color: theme.PRIMARY_TEXT_COLOR,
          // fontFamily: "FONT_SEMI_BOLD",
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={
          userMode === "receiver" ? ReceiverHomeScreen : ProviderHomeScreen
        }
        options={{
          tabBarLabel: "Home",
          tabBarActiveTintColor: theme.PRIMARY_TEXT_COLOR,
          tabBarInactiveTintColor: theme.SECONDARY_TEXT_COLOR,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              color={
                focused ? theme.PRIMARY_TEXT_COLOR : theme.SECONDARY_TEXT_COLOR
              }
              size={24}
            />
          ),
          headerTitleAlign: "center",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ProfileStack", { screen: "MenuScreen" })
              }
              style={{ marginLeft: 20 }}
            >
              <MyAvatar />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={require("@src/assets/images/logo.png")}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <LargeText>DecMark</LargeText>
            </View>
          ),
          headerRight: () => (
            <TouchableOpacity style={{ marginRight: 20 }}>
              <Ionicons
                name="notifications"
                size={24}
                color={theme.PRIMARY_TEXT_COLOR}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="MyServiceScreen"
        component={MyServiceScreen}
        options={{
          tabBarLabel: "Services",
          tabBarActiveTintColor: theme.PRIMARY_TEXT_COLOR,
          tabBarInactiveTintColor: theme.SECONDARY_TEXT_COLOR,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "compass" : "compass-outline"}
              color={
                focused ? theme.PRIMARY_TEXT_COLOR : theme.SECONDARY_TEXT_COLOR
              }
              size={24}
            />
          ),
          headerTitle: "My Services",
          headerStyle: {
            backgroundColor: theme.PRIMARY_BACKGROUND_COLOR,
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
        }}
      />
      <Tab.Screen
        name="MessageScreen"
        component={MessageScreen}
        options={{
          tabBarLabel: "Messages",
          tabBarActiveTintColor: theme.PRIMARY_TEXT_COLOR,
          tabBarInactiveTintColor: theme.SECONDARY_TEXT_COLOR,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={
                focused
                  ? "ios-chatbox-ellipses"
                  : "ios-chatbox-ellipses-outline"
              }
              color={
                focused ? theme.PRIMARY_TEXT_COLOR : theme.SECONDARY_TEXT_COLOR
              }
              size={24}
            />
          ),
          headerTitle: "Messages",
        }}
      />
      <Tab.Screen
        name="WalletScreen"
        component={WalletScreen}
        options={{
          tabBarLabel: "Wallet",
          tabBarActiveTintColor: theme.PRIMARY_TEXT_COLOR,
          tabBarInactiveTintColor: theme.SECONDARY_TEXT_COLOR,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "wallet" : "wallet-outline"}
              color={
                focused ? theme.PRIMARY_TEXT_COLOR : theme.SECONDARY_TEXT_COLOR
              }
              size={24}
            />
          ),
          headerTitle: "Wallet",
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
