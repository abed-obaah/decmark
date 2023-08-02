import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AppSafeAreaView } from "@src/components/AppViews";
import { LargeText, MediumText, SmallText } from "@src/components/AppText";
import useAppTheme from "@src/hooks/useAppTheme";
import { Ionicons } from "@expo/vector-icons";
import PageHeader from "@src/components/PageHeader";

const Faqs = () => {
  const { theme } = useAppTheme();

  return (
    <AppSafeAreaView>
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
          No FAQs
        </LargeText>
        <SmallText
          style={{
            textAlign: "center",
            paddingHorizontal: 25,
            marginTop: 10,
          }}
        >
          We’re excited for you to recieve your first service. They will be
          listed here for feedback.
        </SmallText>
      </View>
    </AppSafeAreaView>
  );
};

export default Faqs;

const styles = StyleSheet.create({});
