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
import PayWithCardScreen from "./PayWithCardScreen";
import { useNavigation } from "@react-navigation/native";


const FundWalletScreen = () => {
  const { theme } = useAppTheme();

  const [amount, setAmount] = useState("");
  const [stage, setStage] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("");

  const validateAmount = () => {
    if (amount) {
      setStage(1);
    }
  };

  // const handlePaymentMethod = (method) => {
  //   setPaymentMethod(method);
  //   setStage(2);
  // };
  const validate = () => {
    // setPaymentMethod(method);
    // setStage(2);
    alert('validate');
  };

  const goBack = () => {
    setStage(1);
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
              keyboardType="numeric"
              onChangeText={(value) => setAmount(value)}
            />
            <AppButton label="Next" onPress={validateAmount} />
          </>
        ) : stage === 1 ? (
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
                <MediumText>You're paying</MediumText>
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
                onPress={() =>
                  navigation.navigate("ProfileStack", {
                    screen: "PayWithCardScreen",
                  })
                }
              >
                <MediumText style={{ color: "white" }}>Cancel</MediumText>
              </TouchableOpacity>
            </View>
            <CashMethod
              title="Pay with Card"
              details="Verve, Visa, Mastercard, discover and Amex cards are all accepted."
              onPress={() => validate()}
              // onPress={validate}
            />
            <QuickTeller
              title="Pay with Quickteller"
              details="Login to your quickteller wallet to get access to your saved cards."
            />
            <BankTransfer
              title="Pay with Bank Transfer"
              details="Make a transfer directly from your bank account to complete a transaction."
            />
            <PayWithQr
              title="Pay with Pay With Qr Code"
              details="Generate a QR Code you can scan with your bank app to pay."
            />
            <UssdMethod
              title="Pay with Pay With USSD"
              details="Dail a USSD string from any of 17+ banks."
            />
            <BinanceMethod
              title="Pay with Pay With Binance"
              details="Fund your e-wallet using binance and crypto currency options."
            />
          </>
        ) : (
          <PayWithCardScreen amount={amount} goBack={goBack} />
        )}
      </AppScrollView>
    </AppSafeAreaView>
  );
};

export default FundWalletScreen;

const styles = StyleSheet.create({});
