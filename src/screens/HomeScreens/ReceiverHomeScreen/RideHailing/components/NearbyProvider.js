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

const NearbyProvider = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedHours, setSelectedHours] = useState(0);
  const [customHours, setCustomHours] = useState('');
  const navigation = useNavigation();

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

  const handleSubmit = () => {
    // Handle form submission
    alert('Form submitted!');
  };

  return (
    <AppSafeAreaView>
      <AppScrollView>
        <View style={styles.container}>
            
          <TouchableOpacity style={styles.durationInput} onPress={toggleModal}>
            <Text style={styles.durationInputText}>
              {selectedHours ? `${selectedHours} hours` : 'Duration'}
            </Text>
            <Ionicons name="time-outline" size={24} color="black" />
          </TouchableOpacity>

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
          <AppInput label="Job Title:" />
          <AppInput label="Location:" />
          <AppInput label="Category" />
          <AppInput label="Budget:"
          keyboardType="Numeric" />
          <AppTextarea label="Description:" />
          
          <AppButton label="Get Linked Now" onPress={() =>
                navigation.navigate("ProfileStack", {
                  screen: "Linked",
                })
              } />
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
    marginBottom: 20,
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

export default NearbyProvider;
