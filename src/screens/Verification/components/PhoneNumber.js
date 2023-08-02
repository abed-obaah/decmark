import React, { useEffect } from "react";
import { Keyboard } from "react-native";
import AppButton from "@src/components/AppButton";
import AppInput from "@src/components/AppInput";
import { useDispatch, useSelector } from "react-redux";
import PhoneNumberInput from "@src/components/PhoneNumberInput";
import { useNavigation } from "@react-navigation/native";
import { LinkText } from "@src/components/AppText";
import useValidateLogin from "@src/screens/LogIn/hooks/useValidateLogin";
import useOnChange from "@src/hooks/forms/useOnChange";
import { loginUser, resetAuth } from "@src/redux/authSlice";

export default PhoneNumber = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { inputs, handleChangeInput } = useOnChange({
    phoneNumber: "",
  });
  const { errors, handleError, hanleValidateLogin } = useValidateLogin(
    inputs,
    "phoneNumber"
  );

  const handleVerifyUser = () => {
    Keyboard.dismiss();
    const valid = hanleValidateLogin();
    const userData = {
      handle: "234" + inputs.phoneNumber,
    };
    if (valid) {
      navigation.navigate("OTPScreen");
    }
  };

  return (
    <>
      <PhoneNumberInput
        label="Phone Number"
        error={errors.phoneNumber}
        onFocus={() => handleError("phoneNumber", null)}
        onChangeText={(value) => handleChangeInput("phoneNumber", value)}
      />

      <AppButton label="Next" onPress={handleVerifyUser} />
    </>
  );
};
