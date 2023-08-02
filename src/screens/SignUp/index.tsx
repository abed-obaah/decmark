import React, { useState, FC } from "react";
import { StyleSheet, View, Image } from "react-native";
import { AppSafeAreaView, AppScrollView } from "../../components/AppViews";
import {
  XtraLargeText,
  MediumText,
  LinkText,
  SmallText,
} from "../../components/AppText";
import PhoneNumberInput from "../../components/PhoneNumberInput";
import useTheme from "../../hooks/useAppTheme";
import { SIZES } from "../../constants/theme";
import AppButton from "@src/components/AppButton";

const SignUp: FC<any> = ({ navigation }) => {
  const { theme } = useTheme();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState<any>(null);

  const handleValidateNumber = () => {
    if (phoneNumber.length > 10 || phoneNumber.length < 10) {
      setError("Number should be 10 digits");
    } else {
      setError(null);
      setPhoneNumber("");
      navigation.navigate("SignUpWithNumber", { phoneNumber: phoneNumber });
    }
  };

  return (
    <AppSafeAreaView>
      <AppScrollView>
        <XtraLargeText>Welcome to DecMark!</XtraLargeText>
        <MediumText style={{ paddingVertical: 10 }}>
          Before we proceed, please enter your active mobile number.
        </MediumText>
        <PhoneNumberInput
          error={error}
          onFocus={() => setError(null)}
          placeholder="Eg: 80 XXXX XXXX"
          onChangeText={(value) => setPhoneNumber(value)}
        />
        <AppButton label="Next" onPress={handleValidateNumber} />

        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 50 }}
        >
          <View
            style={[
              styles.line,
              { backgroundColor: theme.PRIMARY_BORDER_COLOR },
            ]}
          />
          <MediumText style={{ textAlign: "center", paddingHorizontal: 10 }}>
            or sign up with
          </MediumText>
          <View
            style={[
              styles.line,
              { backgroundColor: theme.PRIMARY_BORDER_COLOR },
            ]}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 25,
          }}
        >
          <View
            style={[
              styles.imgContainer,
              { backgroundColor: theme.PRIMARY_BORDER_COLOR },
            ]}
          >
            <Image
              source={require("../../assets/images/google-logo.png")}
              style={styles.img}
            />
          </View>
          <View style={{ marginHorizontal: 7.5 }} />
          <View
            style={[
              styles.imgContainer,
              { backgroundColor: theme.PRIMARY_BORDER_COLOR },
            ]}
          >
            <Image
              source={require("../../assets/images/facebook-logo.png")}
              style={styles.img}
            />
          </View>
        </View>
        <SmallText
          style={{
            marginBottom: 35,
            textAlign: "center",
            marginTop: 25,
            paddingHorizontal: 20,
          }}
        >
          By creating an account, you agree to our
          <LinkText> Terms and Conditions</LinkText> and
          <LinkText> Policy.</LinkText>
        </SmallText>
      </AppScrollView>
    </AppSafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  line: {
    flex: 1,
    height: 1,
  },
  imgContainer: {
    width: 50,
    height: 50,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 5,
    paddingLeft: 5,
    borderRadius: SIZES.rounded,
  },
  img: {
    resizeMode: "contain",
    width: "100%",
    height: "100%",
  },
});
