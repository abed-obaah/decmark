import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TimePickerAndroid,
  Platform,
  StyleSheet,
} from 'react-native';
import { AppScrollView, AppSafeAreaView } from "@src/components/AppViews";
import AppButton from '@src/components/AppButton';
import AppTextarea from '@src/components/AppTextarea';
import AppInput from '@src/components/AppInput';
// import DateTimePicker from '@react-native-community/datetimepicker';


import { useDispatch, useSelector } from "react-redux";
// import { MediumText } from "../../components/AppText";
import { useNavigation } from "@react-navigation/native";
import useOnChange from "@src/hooks/forms/useOnChange";
import { resetAuth } from "@src/redux/authSlice";
import axios from "axios";

const CourierScreen = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [price, setPrice] = useState(false);
  const [title, setTitle] = useState('');
  const [destination, setDestination] = useState([1, 0]);
  const [description, setDescription] = useState('');
  const [origin, setOrigin] = useState([1, 0]);
  const baseUrl = "https://api.decmark.com/v1/user";
  const apiKey = "base64:vhMcjElk3d0BYItZB09fP5MbUEPXH2JRtqW3G5/tKSk=";

const CourierService = () => {
  const requestBody = {
    destination,
    title,
    origin,
    price,
    description,
  };

  axios.post(`${baseUrl}/courier/create`,requestBody,{
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  }).then((res) =>{
    console.log("Response:", res.data);
  })
  .catch((err)=>{
    console.log("The error is:", err.response);
  })
 
}

  // function setLocation(value: any) {
  //   throw new Error('Function not implemented.');
  // }

  return (
    <AppSafeAreaView>
      <AppScrollView>
        {/* Rest of the form */}
        <AppInput label="Title:"
         value={title}
        onChangeText={(value) => setTitle(value)} />

        <AppInput
          label="Where is your Location?"
          value={origin.toString()} // Convert the array to a string for display
          onChangeText={(value) => setOrigin(value.split(',').map(Number))} // Split the string and convert it back to an array
        />

        <AppInput
          label="Where are you going to?"
          value={destination.toString()} // Convert the array to a string for display
          onChangeText={(value) => setDestination(value.split(',').map(Number))} // Split the string and convert it back to an array
        />


        <AppInput label="Description:"
         value={description} 
        onChangeText={(value) => setDescription(value)}/>

        <AppInput label="Price:"
          value={price} 
          keyboardType="numeric"
          onChangeText={(value) => setPrice(value)}
         />
        
        <AppButton label="Post" onPress={CourierService}/>
      </AppScrollView>
    </AppSafeAreaView>
  );
};

const styles = StyleSheet.create({
  timePickerContainer: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  timePickerText: {
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    paddingVertical: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  timeOption: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  timeOptionText: {
    fontSize: 16,
  },
  cancelButton: {
    marginTop: 10,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: 'red',
    fontSize: 16,
  },
  datePickerContainer: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

export default CourierScreen;
