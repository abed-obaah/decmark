import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppScrollView, AppSafeAreaView } from "@src/components/AppViews";
import AppButton from '@src/components/AppButton';
import AppTextarea from '@src/components/AppTextarea';
import AppInput from '@src/components/AppInput';
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';

const EditService = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedHours, setSelectedHours] = useState(0);
  const [customHours, setCustomHours] = useState('');
  const [price, setPrice] = useState();
  const [coordinate, setCoordinate] = useState([11, 60]);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const navigation = useNavigation();

  const baseUrl = "https://api.decmark.com/v1/user";
  const apiKey = "base64:vhMcjElk3d0BYItZB09fP5MbUEPXH2JRtqW3G5/tKSk="; // Replace with your actual API key

const quickOfferApi = () => {
  const requestBody = {
    type,
    title,
    coordinate,
    price,
    duration: selectedHours,
    description
  };

  console.log("Input values:", requestBody);

  axios
  .patch(`${baseUrl}/services/3652cc48-6632-4ce8-8b6b-bcd780c2a168/update`,requestBody, {
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




  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleHourSelection = (hours) => {
    setSelectedHours(hours);
    setCustomHours('');
    toggleModal();
  };

  const handleCustomHourChange = (text) => {
    setCustomHours(text);
  };

  // const handleSubmit = () => {
  //   // Handle form submission
  //   alert('Form submitted!');
  // };

  return (
    <AppSafeAreaView>
      <AppScrollView>
        <View style={styles.container}>
            
          

          <Modal visible={isModalVisible} animationType="slide" transparent>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <TouchableOpacity
                  style={styles.hourOption}
                  onPress={() => handleHourSelection(1)}
                >
                  <Text style={styles.hourOptionText}>1 hour</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.hourOption}
                  onPress={() => handleHourSelection(2)}
                >
                  <Text style={styles.hourOptionText}>2 hours</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.hourOption}
                  onPress={() => handleHourSelection(3)}
                >
                  <Text style={styles.hourOptionText}>3 hours</Text>
                </TouchableOpacity>
                {/* Add more hour options as needed */}
                <TextInput
                  style={styles.customHoursInput}
                  placeholder="Custom Duration (hours)"
                  value={customHours}
                  onChangeText={handleCustomHourChange}
                  keyboardType="numeric"
                />
                <TouchableOpacity
                  style={styles.hourOption}
                  onPress={() => handleHourSelection(parseInt(customHours))}
                >
                  <Text style={styles.hourOptionText}>Set Custom Duration</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          {/* Rest of the form */}
          <AppInput 
            label="Offer Title:"
            value={title}
            onChangeText={(value) => setTitle(value)}
          />

          <AppInput 
            label="Offer Type:"
            value={type}
            onChangeText={(value) => setType(value)}
          />

          <AppInput
           label="Location:"
           value={coordinate}
           onChangeText={(value) => setCoordinate([1, 0])}
           />
          <AppInput label="Budget:"
          value={price}
          onChangeText={(value) => setPrice(value)}
          keyboardType="Numeric" />

          <AppInput
           label="Description:"
           value={description}
           onChangeText={(value) => setDescription(value)}
           />

           <TouchableOpacity style={styles.durationInput} onPress={toggleModal}>
            <Text style={styles.durationInputText}>
              {selectedHours ? `${selectedHours} hours` : 'Duration'}
            </Text>
            <Ionicons name="time-outline" size={24} color="black" />
          </TouchableOpacity>
          
          <AppButton label="Post Request" onPress={quickOfferApi}
          //  onPress={() =>
          //       navigation.navigate("ProfileStack", {
          //         screen: "OfferPosted",
          //       })
          //     } 
          
              />
        </View>
      </AppScrollView>
    </AppSafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  durationInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 20,
  },
  durationInputText: {
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
  hourOption: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  hourOptionText: {
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
  customHoursInput: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    width:"90%",
    marginLeft:12
  },
});

export default EditService;
