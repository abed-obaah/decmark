import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import PageHeader from "@src/components/PageHeader";
import { AppSafeAreaView, AppScrollView } from "@src/components/AppViews";
import AppInput from "@src/components/AppInput";
import AppButton from "@src/components/AppButton";
import { FlashList } from "@shopify/flash-list";
import { LargeText, MediumText, SmallText } from "@src/components/AppText";
import useAppTheme from "@src/hooks/useAppTheme";
import { SIZES } from "@src/constants/theme";
import CashMethod from "./components/CashMethod";
import PayWithQr from "./components/PayWithQr";

const WithdrawScreen = () => {
  const { theme } = useAppTheme();

  const [amount, setAmount] = useState("");
  const [stage, setStage] = useState(0);
  const validateAmount = () => {
    if (amount) {
      setStage(1);
    }
  };
  return (
    <AppSafeAreaView>
      <PageHeader title={"Withdraw Funds"} />
      <AppScrollView>
        {stage === 0 ? (
          <>
            <AppInput
              label="Amount"
              autoCapitalize="none"
              // error={errorAmount}
              // onFocus={() => handleError("email", null)}
              onChangeText={(value) => setAmount(value)}
            />
            <AppButton label="Next" onPress={validateAmount} />
          </>
        ) : (
          <>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 20,
                marginTop: 10,
              }}
            >
              <View style={{}}>
                <SmallText>You're paying</SmallText>
                <LargeText>NGN {amount}</LargeText>
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: "red",
                  borderRadius: SIZES.radius,
                  justifyContent: "center",
                  alignItems: "center",
                  paddingHorizontal: 25,
                }}
              >
                <MediumText style={{ color: "white" }}>Cancel</MediumText>
              </TouchableOpacity>
            </View>
            <CashMethod
              title="Withdraw to Account"
              details="White listed bank accounts like Wema, UBA,
              Zenith UBA, etc"
            />
            {/* <PayWithQr
              title="Withdraw With Qr Code"
              details="White listed bank accounts like Wema, UBA,
              Zenith UBA, etc"
            /> */}
          </>
        )}
      </AppScrollView>
    </AppSafeAreaView>
  );
};

export default WithdrawScreen;

const styles = StyleSheet.create({});
