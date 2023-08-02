import React, { useState } from 'react';
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
import DateTimePicker from '@react-native-community/datetimepicker';
// import OfferScreen from './Offers';
import { useNavigation } from "@react-navigation/native";

const OfferCreateScreen = () => {
   const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [duration, setDuration] = useState('');
  const [howOften, setHowOften] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');

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

  const [showTimePicker, setShowTimePicker] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);

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
        // Handle the error case, e.g., show an error message to the user
      }
    } else {
      console.warn('Time picker is not supported on this platform');
    }
  };

  const handleSubmit = () => {
    // Handle form submission
    alert('still working on it');
  };

  return (
    <AppSafeAreaView>
      <AppScrollView>
        <View style={styles.container}>
                {/* select date */}
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
        {/* end of select Date */}

        
        {/* Select Time */}
        <TouchableOpacity style={styles.timePickerContainer} onPress={() => setShowTimePicker(true)}>
          <Text style={styles.timePickerText}>{selectedTime ? selectedTime.toLocaleTimeString() : 'Select Time'}</Text>
        </TouchableOpacity>

        {/* Time Picker Modal */}
        <Modal
          visible={showTimePicker}
          transparent
          animationType="slide"
          onRequestClose={() => setShowTimePicker(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              {/* Custom Time Picker UI */}
              {/* Here you can create your custom time picker UI using TouchableOpacity or other components */}
              {/* Example: */}
              <TouchableOpacity style={styles.timeOption} onPress={handleTimeSelection}>
                <Text style={styles.timeOptionText}>9:00 AM</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.timeOption} onPress={handleTimeSelection}>
                <Text style={styles.timeOptionText}>10:00 AM</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.timeOption} onPress={handleTimeSelection}>
                <Text style={styles.timeOptionText}>10:00 AM</Text>
              </TouchableOpacity>
              {/* ...Add more time options as needed */}

              {/* Cancel Button */}
              <TouchableOpacity style={styles.cancelButton} onPress={() => setShowTimePicker(false)}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Rest of the form */}
        <AppInput label="What do you want done?" />
        <AppTextarea label="Location:" />
        <AppButton label="Next" onPress={() => 
            navigation.navigate("ProfileStack",{
              screen:"Budget"
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
    // paddingHorizontal: 20,
    paddingVertical: 50,
  },
  timePickerContainer: {
    width: '100%',
    height: 40,
    borderColor: '#D3D3D3',
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
    borderColor: '#D3D3D3',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

export default OfferCreateScreen;
