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
import DateTimePicker from '@react-native-community/datetimepicker';
import AppButton from '@src/components/AppButton';
import AppTextarea from '@src/components/AppTextarea';
import AppInput from '@src/components/AppInput';

const ScheduleForm = () => {
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

  const handleSubmit = () => {
    // Handle form submission
    alert('still working on it');
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

        {/* Rest of the form */}
        <AppInput
          label="Duration:"
          value={duration}
          onChangeText={text => setDuration(text)}
        />
        <AppInput
          label="How Often:"
          value={howOften}
          onChangeText={text => setHowOften(text)}
        />
        <AppTextarea
          label="Description:"
          value={description}
          onChangeText={text => setDescription(text)}
        />
        <AppTextarea
          label="Location:"
          value={location}
          onChangeText={text => setLocation(text)}
        />
        <AppButton label="Proceed to Pay" onPress={handleSubmit} />
      </AppScrollView>
    </AppSafeAreaView>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    textAlign: 'left',
    alignSelf: 'stretch',
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
});

export default ScheduleForm;
