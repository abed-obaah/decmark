import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { LargeText, MediumText } from "@src/components/AppText";
import { AppSafeAreaView, AppScrollView } from "@src/components/AppViews";
import AppInput from "@src/components/AppInput";
import AppButton from "@src/components/AppButton";
import AppTextarea from "@src/components/AppTextarea";
import { Ionicons } from "@expo/vector-icons";
import { Clipboard } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Referral = () => {
    const navigation = useNavigation();
  const [referralLink, setReferralLink] = useState("");

  const generateReferralLink = (referralCode) => {
    const baseURL = "https://example.com/referral?code=";
    const referralLink = baseURL + referralCode;
    return referralLink;
  };

  const generateLink = () => {
    const userReferralCode = "ABC123"; // Simulated referral code
    const newReferralLink = generateReferralLink(userReferralCode);
    setReferralLink(newReferralLink);
  };

  const copyToClipboard = () => {
    Clipboard.setString(referralLink);
    Alert.alert("Copied", "Referral link copied to clipboard");
  };

  return (
    <AppSafeAreaView>
      <AppScrollView>
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <AppInput label="Referral" value={referralLink} disabled />
          </View>
          <TouchableOpacity style={styles.copyButton} onPress={copyToClipboard}>
            <Ionicons name="copy-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <AppButton label="Generate" onPress={generateLink} />

        <MediumText style={{ marginVertical: 8 }}
          onPress={() =>
        navigation.navigate("ProfileStack", {
          screen: "users",
        })
      }>View Referred Users</MediumText>

        {/* <MediumText style={{ marginVertical: 8 }}
          onPress={() =>
        navigation.navigate("ProfileStack", {
          screen: "RideMapScreen",
        })
      }>View Referred Users</MediumText> */}

      </AppScrollView>
    </AppSafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  inputContainer: {
    flex: 1,
    marginRight: 10,
  },
  copyButton: {
    padding: 10,
  },
});

export default Referral;
