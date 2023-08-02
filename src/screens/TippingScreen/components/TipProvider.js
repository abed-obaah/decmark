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

const TipProvider = () => {
  const navigation = useNavigation();
  const [amount, setAmount] = useState("");

  const tipLink = () => {
    if (amount) {
      // Perform tipping logic here

      // Navigate to a new page
      navigation.navigate("ConfirmTip");
    } else {
      Alert.alert("Error", "Please enter the tip amount.");
    }
  };

  return (
    <AppSafeAreaView>
      <AppScrollView>
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <AppInput
              label="Amount"
              value={amount}
              keyboardType="numeric"
              onChangeText={setAmount}
            />
          </View>
        </View>
        <AppButton label="Tip" onPress={tipLink} />
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

export default TipProvider;
