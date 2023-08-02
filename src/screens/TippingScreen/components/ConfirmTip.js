import React, { useState } from "react";
import { Keyboard, Pressable, View } from "react-native";
import { AppSafeAreaView, AppScrollView } from "@src/components/AppViews";
import PageHeader from "@src/components/PageHeader";
import OTPField from "@src/components/OTPField";
import { MediumText } from "@src/components/AppText";
import AppButton from "@src/components/AppButton";

const ConfirmTip = ({ navigation }) => {
  const MAX_CODE_LENGTH = 6;
  const [code, setCode] = useState("");
  const [pinReady, setPinReady] = useState(false);

  const handleVerifyOtp = () => {
    navigation.navigate("TipConfirmed");
  };

  return (
    <AppSafeAreaView>
      <AppScrollView style={{ marginTop: 12 }}>
        <Pressable onPress={Keyboard.dismiss}>
          <MediumText style={{ textAlign: "center", marginTop: 20 }}>
            Input Your Payment pin to proceed to pay
          </MediumText>
          <OTPField
            code={code}
            setCode={setCode}
            setPinReady={setPinReady}
            maxLength={MAX_CODE_LENGTH}
          />
        </Pressable>
        <AppButton
          label="Confirm Tip"
          disabled={!pinReady}
          onPress={handleVerifyOtp}
        />
        <View style={{ alignItems: "center", marginVertical: 15 }}></View>
      </AppScrollView>
    </AppSafeAreaView>
  );
};

export default ConfirmTip;
