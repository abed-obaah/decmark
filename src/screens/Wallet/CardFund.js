import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
import QuickTeller from "./components/QuickTeller";
import BankTransfer from "./components/BankTransfer";
import PayWithQr from "./components/PayWithQr";
import UssdMethod from "./components/UssdMethod";
import BinanceMethod from "./components/BinanceMethod";
// import { useNavigation } from "@react-navigation/native";

const FundWalletScreen = () => {
  const { theme } = useAppTheme();

  const [amount, setAmount] = useState("");
  const [stage, setStage] = useState(0);
  const validateAmount = () => {
    if (amount) {
      setStage(1);
    }
  const pop = () => {
    alert("working");
  };
  return (
    <AppSafeAreaView>
      <PageHeader title={"Fund Account"} />
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
                  backgroundColor: "#d91d13",
                  borderRadius: SIZES.radius,
                  justifyContent: "center",
                  alignItems: "center",
                  paddingHorizontal: 20,
                }}
                onPress={pop}
              >
                <MediumText style={{ color: "white" }}>Cancel</MediumText>
              </TouchableOpacity>
            </View>
            <CashMethod
              title="Pay with Card"
              details="Verve, Visa, Mastercard, discover and
            Amex cards are all accepted."
            />
            <QuickTeller
              title="Pay with Quickteller"
              details="Login to your quickteller wallet to get access to your saved cards."
            />
            <BankTransfer
              title="Pay with Quickteller"
              details="Login to your quickteller wallet to get access to your saved cards."
            />
            <PayWithQr
              title="Pay with PayWithQr"
              details="Login to your quickteller wallet to get access to your saved cards."
            />
            <UssdMethod
              title="Pay with UssdMethod"
              details="Login to your quickteller wallet to get access to your saved cards."
            />
            <BinanceMethod
              title="Pay with Binance"
              details="Login to your quickteller wallet to get access to your saved cards."
            />
          </>
        )}
      </AppScrollView>
    </AppSafeAreaView>
  );
};

export default FundWalletScreen;

const styles = StyleSheet.create({});
