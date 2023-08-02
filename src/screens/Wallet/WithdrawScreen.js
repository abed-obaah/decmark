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
import WithdrawAcc from "./components/WithdrawAcc";
import WithdrawQr from "./components/WithdrawQr";

const WithdrawScreen = () => {
  const { theme } = useAppTheme();

  const [amount, setAmount] = useState("");
  const [stage, setStage] = useState(0);
  const validateAmount = () => {
    if (amount) {
      setStage(1);
    }
  };
  const show = () => {
    alert('show')
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
              keyboardType="numeric"
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
                marginTop: 40,
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
                onPress={show}
              >
                <MediumText style={{ color: "white" }}>Cancel</MediumText>
              </TouchableOpacity>
            </View>
            <View>
                <WithdrawAcc
                  title="Withdraw to Accounts"
                  details="White listed bank accounts like Wema, UBA,
                  Zenith UBA, etc"
                  onPress={show}
                />
            </View>
           
            <WithdrawQr
              title="Withdraw with Qr Codes"
              details="White listed bank accounts like Wema, UBA,
              Zenith UBA, etc"
            />
          </>
        )}
      </AppScrollView>
    </AppSafeAreaView>
  );
};

export default WithdrawScreen;

const styles = StyleSheet.create({});
