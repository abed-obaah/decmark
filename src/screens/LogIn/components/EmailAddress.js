import React, { useEffect } from "react";
import { Keyboard } from "react-native";
import AppButton from "@src/components/AppButton";
import AppInput from "@src/components/AppInput";
import { LinkText } from "@src/components/AppText";
import { useNavigation } from "@react-navigation/native";
import useOnChange from "@src/hooks/forms/useOnChange";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, resetAuth } from "@src/redux/authSlice";
import useValidateLogin from "../hooks/useValidateLogin";

export default EmailAddress = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { success } = useSelector((state) => state.auth);
  const { inputs, handleChangeInput } = useOnChange({
    email: "",
    password: "",
  });
  const { errors, handleError, hanleValidateLogin } = useValidateLogin(
    inputs,
    "email"
  );

  useEffect(() => {
    if (success) {
      dispatch(resetAuth());
    }
  }, [success]);

  const handleLoginUser = () => {
    Keyboard.dismiss();
    const valid = hanleValidateLogin();
    const userData = {
      handle: inputs.email,
      password: inputs.password,
    };
    if (valid) dispatch(loginUser(userData));
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
      <AppInput
        label="Password"
        password
        error={errors.password}
        onFocus={() => handleError("password", null)}
        onChangeText={(value) => handleChangeInput("password", value)}
      />
      <LinkText
        style={{ fontSize: 15, paddingTop: 2 }}
        onPress={() => navigation.navigate("ForgotPasswordScreen")}
      >
        Forgot password?
      </LinkText>
      <AppButton label="Login" onPress={handleLoginUser} />
    </>
  );
};
