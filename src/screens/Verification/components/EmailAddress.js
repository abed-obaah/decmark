import React from "react";
import { Keyboard } from "react-native";
import AppButton from "@src/components/AppButton";
import AppInput from "@src/components/AppInput";
import { useNavigation } from "@react-navigation/native";
import useOnChange from "@src/hooks/forms/useOnChange";
import useValidateLogin from "@src/screens/LogIn/hooks/useValidateLogin";

export default EmailAddress = () => {
  const navigation = useNavigation();
  const { inputs, handleChangeInput } = useOnChange({
    email: "",
  });
  const { errors, handleError, hanleValidateLogin } = useValidateLogin(
    inputs,
    "email"
  );

  const handleVerifyUser = () => {
    Keyboard.dismiss();
    const valid = hanleValidateLogin();
    const userData = {
      handle: inputs.email,
    };
    if (!valid) {
      navigation.navigate("OTPScreen");
    }
  };

  return (
    <>
      <AppInput
        label="Email"
        autoCapitalize="none"
        error={errors.email}
        onFocus={() => handleError("email", null)}
        onChangeText={(value) => handleChangeInput("email", value)}
      />
      <AppButton label="Next" onPress={handleVerifyUser} />
    </>
  );
};
