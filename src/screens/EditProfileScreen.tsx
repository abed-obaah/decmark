import React, { useState } from "react";
import { LargeText } from "@src/components/AppText";
import { AppSafeAreaView, AppScrollView } from "@src/components/AppViews";
import AppInput from "@src/components/AppInput";
import AppButton from "@src/components/AppButton";
import AppTextarea from "@src/components/AppTextarea";
import axios from "axios";

const EditProfileScreen = () => {
  const baseUrl = "https://api.decmark.com/v1/user";
  const apiKey = "base64:vhMcjElk3d0BYItZB09fP5MbUEPXH2JRtqW3G5/tKSk=";

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [homeDescription, setHomeDescription] = useState("");

  const UpdateUser = () => {
    const requestBody = {
      firstName,
      lastName,
      phone,
      state,
      city,
      address,
      homeDescription,
    };

    axios
    .put(`${baseUrl}/auth/update`, requestBody, { // Use the updated route URL
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    })
    .then((res) => {
      console.log("Response:", res.data);
    })
    .catch((err) => {
      console.log("The error is:", err.response);
    });
  };

  return (
    <AppSafeAreaView>
      <AppScrollView>
        <LargeText>EditProfileScreen</LargeText>

        <AppInput
          label="First Name"
          value={firstName}
          onChangeText={(value) => setFirstName(value)}
         
        />

        <AppInput
          label="Last Name"
          value={lastName}
          // onChangeText={setLastName}
          onChangeText={(value) => setLastName(value)}
        />

        <AppInput label="Email Address"
         value={email}
          // onChangeText={setEmail}
          onChangeText={(value) => setEmail(value)}
           />

        <AppInput label="Phone"
         value={phone}
         onChangeText={(value) => setPhone(value)}
        //  onChangeText={setPhone}
          />

        <AppInput label="State"
         value={state} 
        //  onChangeText={setState}
         onChangeText={(value) => setState(value)}
          />

        <AppInput label="City"
         value={city} 
        //  onChangeText={setCity}
         onChangeText={(value) => setCity(value)}
          />

        <AppInput label="Address"
         value={address} 
        //  onChangeText={setAddress}
         onChangeText={(value) => setAddress(value)}
         />

        <AppInput
          label="Home Address"
          value={homeDescription}
          // onChangeText={setHomeDescription}
          onChangeText={(value) => setHomeDescription(value)}
        />

        <AppButton label="Save" onPress={UpdateUser} />
      </AppScrollView>
    </AppSafeAreaView>
  );
};

export default EditProfileScreen;
