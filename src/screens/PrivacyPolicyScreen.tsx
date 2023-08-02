import React from "react";
import { LargeText } from "@src/components/AppText";
import { AppSafeAreaView, AppScrollView } from "@src/components/AppViews";
import AppInput from "@src/components/AppInput";
import AppButton from "@src/components/AppButton";
import AppTextarea from "@src/components/AppTextarea";

const PrivacyPolicyScreen = () => {
  return (
    <AppSafeAreaView>
      <AppScrollView>
        <LargeText>Privacy Policy</LargeText>
{/* 
        <AppInput label="First Name" />
        <AppInput label="Last Name" />
        <AppInput label="Email Address" />
        <AppInput label="State" />
        <AppTextarea label="City" />
        <AppTextarea label="Address" />
        <AppTextarea label="Home address" />
        <AppButton label="Save" /> */}
      </AppScrollView>
    </AppSafeAreaView>
  );
};

export default PrivacyPolicyScreen;
