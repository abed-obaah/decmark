import React, { useState } from "react";
import { Keyboard, Pressable, View, Modal, Text } from "react-native";
import { AppSafeAreaView, AppScrollView } from "@src/components/AppViews";
import OTPField from "@src/components/OTPField";
import { MediumText, LargeText } from "@src/components/AppText";
import AppInput from "@src/components/AppInput";
import AppButton from "@src/components/AppButton";
import AppTextarea from "@src/components/AppTextarea";
import { useNavigation } from "@react-navigation/native";

const SubmitOffer = () => {
  const [inputValue, setInputValue] = useState("");
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const navigation = useNavigation();

  const handleSubmit = () => {
    if (inputValue.trim() === "") {
      setErrorModalVisible(true);
    } else {
      // Perform the submission logic here
      navigation.navigate("ErrandScreen"); // Replace "NewScreen" with your desired screen name
    }
  };

  return (
    <AppSafeAreaView>
      <AppScrollView style={{ marginTop: 12 }}>
        <AppInput
          label="What is the rate you are offering to do this job?"
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
          keyboardType="numeric"
        />
        <AppTextarea label="Describe your Offer" />
        <AppButton label="Submit Offer" onPress={handleSubmit} />

        {/* Error Modal */}
        <Modal
          visible={errorModalVisible}
          animationType="fade"
          transparent={true}
          onRequestClose={() => setErrorModalVisible(false)}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                padding: 20,
                borderRadius: 8,
              }}
            >
              <Text style={{ fontSize: 16, textAlign: "center" }}>
                Input is empty!
              </Text>
              <Text style={{ textAlign: "center" }}>
                Please enter a value before submitting.
              </Text>
              <View style={{ alignItems: "center", marginTop: 20 }}>
                <AppButton
                  label="OK"
                  onPress={() => setErrorModalVisible(false)}
                  buttonWidth={120} // Adjust the width as needed
                />
              </View>
            </View>
          </View>
        </Modal>
      </AppScrollView>
    </AppSafeAreaView>
  );
};

export default SubmitOffer;
