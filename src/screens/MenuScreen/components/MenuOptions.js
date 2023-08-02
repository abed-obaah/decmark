import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { MediumText } from "@src/components/AppText";

import {
  Ionicons,
  EvilIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import useTheme from "@src/hooks/useAppTheme";
import { useNavigation } from "@react-navigation/native";

export default MenuOptions = () => {
  const { theme } = useTheme();
  const navigation = useNavigation();
  const menuOptions = [
    {
      lable: "Notifications",
      icon: (
        <Ionicons
          name="notifications-outline"
          size={24}
          color={theme.PRIMARY_TEXT_COLOR}
        />
      ),
      
      screen: () =>
        navigation.navigate("ProfileStack", {
          screen: "NotificationScreen",
        }),
    },
    {
      lable: "Messages",
      icon: (
        <Ionicons
          name="mail-outline"
          size={24}
          color={theme.PRIMARY_TEXT_COLOR}
        />
      ),
      screen: () =>
        navigation.navigate("ProfileStack", {
          screen: "NotificationScreen",
        }),
    },
    {
      lable: "History",
      icon: (
        <Ionicons
          name="time-outline"
          size={24}
          color={theme.PRIMARY_TEXT_COLOR}
        />
      ),
      screen: () =>
        navigation.navigate("ProfileStack", { screen: "HistoryScreen" }),
    },
    {
      lable: "My Referral",
      icon: (
        <Ionicons
          name="person-add-outline"
          size={24}
          color={theme.PRIMARY_TEXT_COLOR}
        />
      ),
      screen: () =>
        navigation.navigate("ProfileStack", { screen: "Referral" }),
    },
    
   
    {
      lable: "Customer Care",
      icon: (
        <Ionicons
          name="shield-checkmark-outline"
          size={24}
          color={theme.PRIMARY_TEXT_COLOR}
        />
      ),
      screen: () =>
      navigation.navigate("ProfileStack", { screen: "CustomerCareScreen" }),
  },
    {
      lable: "Verification",
      icon: (
        <MaterialCommunityIcons
          name="card-account-details-star-outline"
          size={24}
          color={theme.PRIMARY_TEXT_COLOR}
        />
      ),
      screen: () => navigation.navigate("VerificationStack"),
    },
    // {
    //   lable: "Notifications",
    //   icon: (
    //     <Ionicons
    //       name="notifications-outline"
    //       size={24}
    //       color={theme.PRIMARY_TEXT_COLOR}
    //     />
    //   ),
    //   screen: () =>
    //     navigation.navigate("ProfileStack", {
    //       screen: "NotificationScreen",
    //     }),
    // },
    // {
    //   lable: "History",
    //   icon: (
    //     <Ionicons
    //       name="time-outline"
    //       size={24}
    //       color={theme.PRIMARY_TEXT_COLOR}
    //     />
    //   ),
    //   screen: () =>
    //     navigation.navigate("ProfileStack", { screen: "HistoryScreen" }),
    // },
    {
      lable: "FAQs",
      icon: (
        <Ionicons
          name="help-circle-outline"
          size={24}
          color={theme.PRIMARY_TEXT_COLOR}
        />
      ),
      screen: () =>
      navigation.navigate("ProfileStack", { screen: "Faqs" }),
  },

    {
      lable: "Account Settings",
      icon: (
        <Ionicons
          name="settings-outline"
          size={24}
          color={theme.PRIMARY_TEXT_COLOR}
        />
      ),
      screen: () =>
      navigation.navigate("AccountScreen"),
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ marginLeft: 10 }}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      ),
  },
  {
    lable: "How to use App",
    screen: () => navigation.navigate("HowToUseApp"),
    headerLeft: () => (
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ marginLeft: 10 }}
      >
      </TouchableOpacity>
    ),
    style: styles.centeredMenuItem // Add a style for center alignment
  },
  ];

  return (
    <>
      {menuOptions.map((item, i) => (
        <TouchableOpacity key={i} onPress={item.screen}>
          <View style={[styles.menuItem, item.style]}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {item.icon}
              <View style={{ marginLeft: 20 }}>
                <MediumText style={{ color: theme.PRIMARY_TEXT_COLOR }}>
                  {item.lable}
                </MediumText>
              </View>
            </View>
            {i !== menuOptions.length - 1 && (
              <EvilIcons
                name="chevron-right"
                size={25}
                color={theme.SECONDARY_TEXT_COLOR}
              />
            )}
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
};


const styles = StyleSheet.create({
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 18,
  },
  centeredMenuItem: {
    justifyContent: "center", // Center the menu item horizontally
  },
});
