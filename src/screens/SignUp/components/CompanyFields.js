import React, { useEffect } from "react";
import AppButton from "../../../components/AppButton";
import AppInput from "../../../components/AppInput";
import { View, Keyboard, Alert } from "react-native";
import { SIZES } from "../../../constants/theme";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import useOnChange from "@src/hooks/forms/useOnChange";
import { registerUser, resetAuth} from "@src/redux/authSlice";
import { registerBusiness } from "@src/redux/authSlice";
// import { registerBusiness } from "@src/redux/authSlice";

import { useDispatch, useSelector } from "react-redux";
import { MediumText } from "../../../components/AppText";

export default CompanyFields = ({
  theme,
  toggleReferralID,
  setToggleReferralID,
  phoneNumber
}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { success } = useSelector((state) => state.auth);
  const {
    inputs,
    errors,
    handleError,
    handleChangeInput,
    handleValidateForm,
  } =  useOnChange({
    first_name: "",
    last_name: "",
    email: "",
      phone: "234" + phoneNumber,
      password: "",
      gender: "male",
    accept_terms: true,
  });

  useEffect(() => {
    if (success) {
      navigation.navigate("LogIn");
    }
    dispatch(resetAuth());
  }, [success, navigation, dispatch]);

  const handleRegisterBusiness = () => {
    Keyboard.dismiss();
    const valid = handleValidateForm();
    console.log(valid); 
    if (valid) {
      console.log(valid); // Log the input values
  
      dispatch(registerBusiness(inputs))
        .then(() => {
          navigation.navigate("LogIn");
        })
        .catch((error) => {
          // Handle error if necessary
          console.log(error);
        });
    }
  };
  
  
  

  return (
    <>
      <AppInput
        label="Company's Name"
        error={errors.last_name}
        onFocus={() => handleError("last_name", null)}
        onChangeText={(value) => handleChangeInput("last_name", value)}
      />
      <AppInput
        label="CAC Number"
        maxLength={14}
        keyboardType="numeric"
        error={errors.cac}
        onFocus={() => handleError("cac", null)}
        onChangeText={(value) => handleChangeInput("cac", value)}
      />
      <AppInput
        label="Account Manager"
        error={errors.first_name}
        onFocus={() => handleError("first_name", null)}
        onChangeText={(value) => handleChangeInput("first_name", value)}
      />
      <AppInput
        label="Email"
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

      <View style={{ marginTop: 20 }}>
        <View
          style={{
            fontSize: SIZES.md,
            paddingVertical: 2.5,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <AntDesign
            name={toggleReferralID ? "caretdown" : "caretright"}
            style={{
              color: theme.SECONDARY_TEXT_COLOR,
              fontSize: 13.5,
              marginRight: 3.5,
            }}
            onPress={() => setToggleReferralID(!toggleReferralID)}
          />
          <MediumText
            onPress={() => setToggleReferralID(!toggleReferralID)}
          >
            Referral ID (Optional)
          </MediumText>
        </View>
        {toggleReferralID && <AppInput marginTop={5} />}
      </View>

      <AppButton label="Submit" onPress={handleRegisterBusiness} />
    </>
  );
};
