import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  TimePickerAndroid,
  Platform,
  StyleSheet,
} from 'react-native';
import { AppScrollView, AppSafeAreaView } from "@src/components/AppViews";
import AppButton from '@src/components/AppButton';
import AppTextarea from '@src/components/AppTextarea';
import AppInput from '@src/components/AppInput';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons';
import axios from "axios";
import { useRoute } from "@react-navigation/native";

const ScheduleForm = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedHours, setSelectedHours] = useState(0);
  const [customHours, setCustomHours] = useState('');

  const route = useRoute();
  const { id, price, user_id } = route.params;

  const [selectedDate, setSelectedDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [description, setDescription] = useState('');
  const [coordinate, setCoordinate] = useState([1, 0]);
  // const [userId, setId] = useState('');

  const baseUrl = "https://api.decmark.com/v1/user";
  const apiKey = "base64:vhMcjElk3d0BYItZB09fP5MbUEPXH2JRtqW3G5/tKSk=";

  const handleDateChange = (event, date) => {
    setShowDatePicker(false);
    if (date) {
      setSelectedDate(date);
    }
  };

  const showDatePickerModal = () => {
    setShowDatePicker(true);
  };

  const handleDateSelection = () => {
    if (Platform.OS === 'ios') {
      return (
        <DateTimePicker
          value={selectedDate || new Date()}
          mode="date"
          onChange={handleDateChange}
        />
      );
    } else {
      showDatePickerModal();
    }
  };

  const handleTimeSelection = async () => {
    if (Platform.OS === 'android') {
      try {
        const { action, hour, minute } = await TimePickerAndroid.open({
          is24Hour: false, // Set to true for 24-hour format
        });
        if (action !== TimePickerAndroid.dismissedAction) {
          const time = new Date();
          time.setHours(hour);
          time.setMinutes(minute);
          setSelectedTime(time);
        }
      } catch ({ code, message }) {
        console.warn('Cannot open time picker', message);
      }
    } else {
      console.warn('Time picker is not supported on this platform');
    }
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

  const handleSubmit = () => {
    // Handle form submission
    alert('still working on it');
  };

  const ScheduleApi = () => {
    const requestBody = {
      duedate: selectedDate,
      description: description,
      coordinate: coordinate,
      price: price,
      times: selectedHours,
      userId: user_id,
      // serviceId:user_id,
    };

    console.log("Input values:", requestBody);

    axios
      .post(`${baseUrl}/${user_id}/schedule`, requestBody, {
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

        {/* Select Date */}
        <Text style={styles.label}>Select Date:</Text>
        <TouchableOpacity style={styles.datePickerContainer} onPress={handleDateSelection}>
          <Text style={styles.dateText}>{selectedDate ? selectedDate.toDateString() : 'Select a date'}</Text>
        </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker
            value={selectedDate || new Date()}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}

        {/* Select Time */}
        <TouchableOpacity style={styles.durationInput} onPress={toggleModal}>
          <Text style={styles.durationInputText}>
            {selectedHours ? `${selectedHours} hours` : 'Duration'}
          </Text>
          <Ionicons name="time-outline" size={24} color="black" />
        </TouchableOpacity>

        {/* Time Picker Modal */}
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
        <AppInput label="How Often:" />
        <AppInput label="" value={id} editable={false} />
        <AppInput label="" value={user_id} editable={false} />
        <AppInput label="Price" value={price} editable={false} />
        <AppInput
          label="Description:"
          value={description}
          onChangeText={(value) => setDescription(value)}
          multiline={true}
          numberOfLines={4}
        />
        <AppTextarea label="Location:" value={coordinate} onChangeText={(value) => setCoordinate(value)} />
        <AppButton label="Proceed to Pay" onPress={ScheduleApi} />
      </AppScrollView>
    </AppSafeAreaView>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    marginBottom: 5,
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
  dateText: {
    fontSize: 16,
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
    width: "90%",
    marginLeft: 12,
  },
});

export default ScheduleForm;
