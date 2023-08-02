import React, { useState } from "react";
import { AppSafeAreaView, AppScrollView } from "../../components/AppViews";
import { Keyboard, Pressable, View } from "react-native";
import PageHeader from "@src/components/PageHeader";
import OTPField from "@src/components/OTPField";
import { LinkText, MediumText } from "@src/components/AppText";
import AppButton from "@src/components/AppButton";
import { SIZES } from "@src/constants/theme";

export default OTPScreen = ({ navigation }) => {
  const MAX_CODE_LENGTH = 6;

  const [code, setCode] = useState("");
  const [pinReady, setPinReady] = useState(false);

  const handleVerifyOtp = () => {
    navigation.navigate("UploadScreen");
  };

  return (
    <AppSafeAreaView>
      <PageHeader title={"Verification Code"} />

      <AppScrollView style={{marginTop: 12}}>
        <Pressable onPress={Keyboard.dismiss}>
          <MediumText style={{ textAlign: "center", marginTop: 20 }}>
            We have sent a code to your mobile number
          </MediumText>
          <LinkText
            style={{
              fontSize: SIZES.md,
              marginBottom: 10,
              alignSelf: "center",
            }}
          >
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
