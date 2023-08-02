import React from "react";
import { TouchableOpacity } from "react-native";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import useAppTheme from "@src/hooks/useAppTheme";
import type { RootStackParamList } from "../@types/navigation";

import MenuScreen from "@src/screens/MenuScreen";
import AccountScreen from "@src/screens/AccountScreen";
import EditProfileScreen from "@src/screens/EditProfileScreen";
import ChangeLanguageScreen from "@src/screens/ChangeLanguageScreen";
import PrivacyPolicyScreen from "@src/screens/PrivacyPolicyScreen";
import  Referral from "@src/screens/Referral/Referral";
import  users from "@src/screens/Referral/components/users";
import  CustomerCareScreen from "@src/screens/CustomerCare/CustomerCareScreen";
import  Faqs from "@src/screens/FAQs/Faqs";
import  TippingPage from "@src/screens/TippingScreen/TippingPage";
import  TipProvider from "@src/screens/TippingScreen/components/TipProvider";
import  ConfirmTip from "@src/screens/TippingScreen/components/ConfirmTip";
import  HowToUseApp from "@src/screens/HowToUseApp/HowToUseApp";
import RideMapScreen from "@src/screens/RideMapScreen";
import CourierScreen from "@src/screens/HomeScreens/ReceiverHomeScreen/RideHailing/CourierScreen";
import ErrandScreen from "@src/screens/HomeScreens/ReceiverHomeScreen/RideHailing/ErrandScreen";
import JobDetails from "@src/screens/HomeScreens/ReceiverHomeScreen/RideHailing/components/JobDetails";
// import Myjobs from "@src/screens/HomeScreens/ReceiverHomeScreen/RideHailing/components/Myjobs";
import OfferPosted from "@src/screens/HomeScreens/ReceiverHomeScreen/RideHailing/components/OfferPosted";
import GetProvider from "@src/screens/HomeScreens/ReceiverHomeScreen/RideHailing/components/GetProvider";
import NearbyProvider from "@src/screens/HomeScreens/ReceiverHomeScreen/RideHailing/components/NearbyProvider";
import NearbyRider from "@src/screens/HomeScreens/ReceiverHomeScreen/RideHailing/components/NearbyRider";
import Linked from "@src/screens/HomeScreens/ReceiverHomeScreen/RideHailing/components/Linked";
import Rider from "@src/screens/HomeScreens/ReceiverHomeScreen/RideHailing/components/Rider";
import RiderDone from "@src/screens/HomeScreens/ReceiverHomeScreen/RideHailing/components/RiderDone";
import OfferScreen from "@src/screens/HomeScreens/ReceiverHomeScreen/RideHailing/components/OfferCreateScreen";
import Budget from "@src/screens/HomeScreens/ReceiverHomeScreen/RideHailing/components/Budget";



import ProviderProfileScreen from "@src/screens/ProviderProfileScreen";
import HistoryScreen from "@src/screens/History/HistoryScreen";
import NotificationScreen from "@src/screens/Notification/NotificationScreen";
import ScheduleScreen from "@src/screens/ScheduleScreen";
import PayWithCardScreen from "@src/screens/Wallet/PayWithCardScreen";
import PaymentWithBank from "@src/screens/Wallet/PaymentWithBank";
import PayWithQr from "@src/screens/Wallet/PayWithQr";
import PayWithUssd from "@src/screens/Wallet/PayWithUssd";
import PayWithBinance from "@src/screens/Wallet/PayWithBinance";
import WithdrawToAcc from "@src/screens/Wallet/WithdrawToAcc";
import WithdrawWithQr from "@src/screens/Wallet/WithdrawWithQr";
import TipConfirmed from "@src/screens/TippingScreen/components/TipConfirmed";
import SubmitOffer from "@src/screens/HomeScreens/ReceiverHomeScreen/RideHailing/components/SubmitOffer";
import PostService from "@src/screens/HomeScreens/ReceiverHomeScreen/RideHailing/components/PostService";
import EditService from "@src/screens/HomeScreens/ProviderHomeScreen/components/EditService";

import DisplayAll from "@src/screens/Verification/components/DisplayAll";
// import DisplayAll from "@src/screens/Verification/components/displayAll";


const Stack = createStackNavigator<RootStackParamList>();

const ProfileStackNavigator = () => {
  const { theme, handleToggleTheme } = useAppTheme();

  const options: StackNavigationOptions = {
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
      <MaterialIcons name="west" size={24} color={theme.SECONDARY_TEXT_COLOR} />
    ),
  };

  return (
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen
        name="MenuScreen"
        component={MenuScreen}
        options={{
          headerTitle: "",
          headerLeft: () =>null,
          headerRight: () => (
            <TouchableOpacity
              onPress={handleToggleTheme}
              style={{ paddingRight: 20 }}
            >
              <Ionicons
                name={theme.mode === "light" ? "sunny" : "moon"}
                size={24}
                color={theme.SECONDARY_TEXT_COLOR}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{
          headerTitle: "My account",
          headerLeft:()=>null
        }}
      />

      {/*  */}

      <Stack.Screen
      name="Budget"
      component={Budget}
      options={({ navigation }) => ({
        headerTitle: "",
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ marginLeft: 10 }}
          >
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        ),
      })}
      />

      <Stack.Screen
      name="DisplayAll"
      component={DisplayAll}
      options={({ navigation }) => ({
        headerTitle: "",
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ marginLeft: 10 }}
          >
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        ),
      })}
      />
      <Stack.Screen
      name="OfferCreateScreen"
      component={OfferScreen}
      options={({ navigation }) => ({
        headerTitle: "Offer",
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ marginLeft: 10 }}
          >
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        ),
      })}
      />
      <Stack.Screen
      name="EditService"
      component={EditService}
      options={({ navigation }) => ({
        headerTitle: "Update Your Service",
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ marginLeft: 10 }}
          >
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        ),
      })}
      />
      <Stack.Screen
      name="OfferScreen"
      component={OfferScreen}
      options={({ navigation }) => ({
        headerTitle: "",
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ marginLeft: 10 }}
          >
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        ),
      })}
      />
      <Stack.Screen
      name="Rider"
      component={Rider}
      options={({ navigation }) => ({
        headerTitle: "Rider",
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ marginLeft: 10 }}
          >
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        ),
      })}
      />
      <Stack.Screen
      name="Linked"
      component={Linked}
      options={({ navigation }) => ({
        headerTitle: "Linked",
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ marginLeft: 10 }}
          >
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        ),
      })}
      />
      <Stack.Screen
      name="RideMapScreen"
      component={RideMapScreen}
      options={({ navigation }) => ({
        headerTitle: "Ride Map Screen",
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ marginLeft: 10 }}
          >
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        ),
      })}
      />
      <Stack.Screen
      name="PostService"
      component={PostService}
      options={({ navigation }) => ({
        headerTitle: "Post Service",
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ marginLeft: 10 }}
          >
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        ),
      })}
      />

      <Stack.Screen
      name="NearbyProvider"
      component={NearbyProvider}
      options={({ navigation }) => ({
        headerTitle: "Nearby Provider",
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ marginLeft: 10 }}
          >
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        ),
      })}
      />
      <Stack.Screen
      name="NearbyRider"
      component={NearbyRider}
      options={({ navigation }) => ({
        headerTitle: "Nearby Rider",
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ marginLeft: 10 }}
          >
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        ),
      })}
      />
      <Stack.Screen
      name="RiderDone"
      component={RiderDone}
      options={({ navigation }) => ({
        headerTitle: "Nearby Rider Found",
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ marginLeft: 10 }}
          >
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        ),
      })}
      />
      <Stack.Screen
      name="GetProvider"
      component={GetProvider}
      options={({ navigation }) => ({
        headerTitle: "",
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ marginLeft: 10 }}
          >
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        ),
      })}
      />

      <Stack.Screen
      name="OfferPosted"
      component={OfferPosted}
      options={({ navigation }) => ({
        headerTitle: " Offer Posted",
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ marginLeft: 10 }}
          >
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        ),
      })}
      />

      <Stack.Screen
      name="SubmitOffer"
      component={SubmitOffer}
      options={({ navigation }) => ({
        headerTitle: "",
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ marginLeft: 10 }}
          >
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        ),
      })}
      />
      {/* <Stack.Screen
      name="Myjobs"
      component={Myjobs}
      
      /> */}
      <Stack.Screen
      name="JobDetails"
      component={JobDetails}
      options={({ navigation }) => ({
        headerTitle: "Job Details",
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ marginLeft: 10 }}
          >
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        ),
      })}
      />
      
      <Stack.Screen
      name="CourierScreen"
      component={CourierScreen}
      options={({ navigation }) => ({
        headerTitle: "Courier Screen",
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ marginLeft: 10 }}
          >
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        ),
      })}
      />
      <Stack.Screen
      name="ErrandScreen"
      component={ErrandScreen}
      options={({ navigation }) => ({
        headerTitle: "",
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ marginLeft: 10 }}
          >
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        ),
      })}
      />

      {/*  */}

      <Stack.Screen
        name="HowToUseApp"
        component={HowToUseApp}
        options={({ navigation }) => ({
          headerTitle: "How To Use App",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 10 }}
            >
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
        options={{
          headerTitle: "Edit profile",
          headerLeft:()=>null
        }}
      />
      <Stack.Screen
        name="ChangeLanguageScreen"
        component={ChangeLanguageScreen}
        options={{
          headerTitle: "Change Language",
          headerLeft:()=>null
        }}
      />
      <Stack.Screen
        name="Referral"
        component={Referral}
        options={({ navigation }) => ({
          headerTitle: "Referral",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 10 }}
            >
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="users"
        component={users}
        options={({ navigation }) => ({
          headerTitle: "Referred users",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 10 }}
            >
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="CustomerCareScreen"
        component={CustomerCareScreen}
        options={({ navigation }) => ({
          headerTitle: "Customer Care - Online",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 10 }}
            >
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="Faqs"
        component={Faqs}
        options={({ navigation }) => ({
          headerTitle: "Faqs",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 10 }}
            >
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="PrivacyPolicyScreen"
        component={PrivacyPolicyScreen}
        options={{
          headerTitle: "Privacy Policy",
          headerLeft:()=>null
        }}
      />
      <Stack.Screen
        name="ProviderProfileScreen"
        component={ProviderProfileScreen}
        options={{
          headerTitle: "Provider's Profile",
          headerLeft:()=>null
        }}
      />
      <Stack.Screen
        name="ScheduleScreen"
        component={ScheduleScreen}
        options={{
          headerTitle: "Schedule Provider",
          headerLeft:()=>null
        }}
      />
      <Stack.Screen
        name="TipConfirmed"
        component={TipConfirmed}
        options={({ navigation }) => ({
          headerTitle: "Tip Confirmed",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 10 }}
            >
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="ConfirmTip"
        component={ConfirmTip}
        options={({ navigation }) => ({
          headerTitle: "Input Pin",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 10 }}
            >
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="TippingPage"
        component={TippingPage}
        options={({ navigation }) => ({
          headerTitle: "Tipping Page",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 10 }}
            >
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="TipProvider"
        component={TipProvider}
        options={({ navigation }) => ({
          headerTitle: "Tip Provider",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 10 }}
            >
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ),
        })}
      />

        <Stack.Screen
                name="PayWithCardScreen"
                component={PayWithCardScreen} 
                options={({ navigation }) => ({
                  headerTitle: "Payment with card",
                  headerLeft: () => (
                    <TouchableOpacity
                      onPress={() => navigation.goBack()}
                      style={{ marginLeft: 10 }}
                    >
                      <Ionicons name="arrow-back" size={24} color="black" />
                    </TouchableOpacity>
                  ),
                })}
          />

        <Stack.Screen
                name="PaymentWithBank"
                component={PaymentWithBank} 
                options={({ navigation }) => ({
                  headerTitle: "Pay With Bank",
                  headerLeft: () => (
                    <TouchableOpacity
                      onPress={() => navigation.goBack()}
                      style={{ marginLeft: 10 }}
                    >
                      <Ionicons name="arrow-back" size={24} color="black" />
                    </TouchableOpacity>
                  ),
                })}
          />
         <Stack.Screen
                name="PayWithQr"
                component={PayWithQr} 
                options={({ navigation }) => ({
                  headerTitle: "Pay With Qr",
                  headerLeft: () => (
                    <TouchableOpacity
                      onPress={() => navigation.goBack()}
                      style={{ marginLeft: 10 }}
                    >
                      <Ionicons name="arrow-back" size={24} color="black" />
                    </TouchableOpacity>
                  ),
                })}
          />

          <Stack.Screen
                name="PayWithUssd"
                component={PayWithUssd} 
                options={({ navigation }) => ({
                  headerTitle: "Pay With Ussd",
                  headerLeft: () => (
                    <TouchableOpacity
                      onPress={() => navigation.goBack()}
                      style={{ marginLeft: 10 }}
                    >
                      <Ionicons name="arrow-back" size={24} color="black" />
                    </TouchableOpacity>
                  ),
                })}
          />
          <Stack.Screen
                name="PayWithBinance"
                component={PayWithBinance} 
                options={({ navigation }) => ({
                  headerTitle: "Pay With Binance",
                  headerLeft: () => (
                    <TouchableOpacity
                      onPress={() => navigation.goBack()}
                      style={{ marginLeft: 10 }}
                    >
                      <Ionicons name="arrow-back" size={24} color="black" />
                    </TouchableOpacity>
                  ),
                })}
          />
          <Stack.Screen
                name="WithdrawToAcc"
                component={WithdrawToAcc} 
                options={({ navigation }) => ({
                  headerTitle: "Withdraw To Acc",
                  headerLeft: () => (
                    <TouchableOpacity
                      onPress={() => navigation.goBack()}
                      style={{ marginLeft: 10 }}
                    >
                      <Ionicons name="arrow-back" size={24} color="black" />
                    </TouchableOpacity>
                  ),
                })}
          />
                    <Stack.Screen
              name="WithdrawWithQr"
              component={WithdrawWithQr} 
              options={({ navigation }) => ({
                headerTitle: "Withdraw With Qr",
                headerLeft: () => (
                  <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ marginLeft: 10 }}
                  >
                    <Ionicons name="arrow-back" size={24} color="black" />
                  </TouchableOpacity>
                ),
              })}
            />
      
       <Stack.Screen
        name="HistoryScreen"
        component={HistoryScreen}
        options={{
          header:()=>null
        }}
      />
        <Stack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{
          header:()=>null
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStackNavigator;
