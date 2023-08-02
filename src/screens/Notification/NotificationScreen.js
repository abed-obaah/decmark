import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AppSafeAreaView } from "@src/components/AppViews";
import { LargeText, MediumText, SmallText } from "@src/components/AppText";
import useAppTheme from "@src/hooks/useAppTheme";
import { Ionicons } from "@expo/vector-icons";
import PageHeader from "@src/components/PageHeader";

const NotificationScreen = () => {
  const { theme } = useAppTheme();

  return (
    <AppSafeAreaView>
      <PageHeader title={"Notification"} />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LargeText
          style={{
            color: theme.PRIMARY_TEXT_COLOR,
          }}
        >
          No Notification
        </LargeText>
        <SmallText
          style={{
            textAlign: "center",
            paddingHorizontal: 25,
            marginTop: 10,
          }}
        >
          We send you notifications to update you on your schedule and service
          delivery.
        </SmallText>
      </View>
    </AppSafeAreaView>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({});
