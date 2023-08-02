import React, { useState } from "react";
import { Pressable, Keyboard, View } from "react-native";
import AppButton from "@src/components/AppButton";
import OTPField from "@src/components/OTPField";
import { SIZES } from "@src/constants/theme";
import { AppSafeAreaView, AppScrollView } from "@src/components/AppViews";
import { MediumText, LinkText } from "@src/components/AppText";

export default OTPScreen = ({ navigation }) => {
  const [code, setCode] = useState("");
  const [pinReady, setPinReady] = useState(false);
  const MAX_CODE_LENGTH = 5;

  const handleVerifyOtp = () => {
    navigation.navigate("BottomTabNavigator", { screen: "HomeScreen" });
  };

  return (
    <AppSafeAreaView>
      <AppScrollView>
        <Pressable onPress={Keyboard.dismiss}>
          <MediumText>We have sent a code to your mobile number</MediumText>
          <LinkText style={{ fontSize: SIZES.md, marginBottom: 10 }}>
            +2348141726099
          </LinkText>
          <OTPField
            code={code}
            setCode={setCode}
            setPinReady={setPinReady}
            maxLength={MAX_CODE_LENGTH}
          />
        </Pressable>
        <AppButton
          label="Verify"
          disabled={!pinReady}
          onPress={handleVerifyOtp}
        />
        <View
          style={{
            alignItems: "center",
            marginVertical: 15,
          }}
        >
          <MediumText>Didn't receive a text?</MediumText>
          <LinkText
            style={{
              fontSize: SIZES.md,
            }}
          >
            Resend code
          </LinkText>
        </View>
      </AppScrollView>
    </AppSafeAreaView>
  );
};
