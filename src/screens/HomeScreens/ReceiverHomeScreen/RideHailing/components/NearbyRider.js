import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, Alert } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import AppInput from '@src/components/AppInput';
import AppButton from "@src/components/AppButton";
import { AppScrollView, AppSafeAreaView } from "@src/components/AppViews";
import { useNavigation } from "@react-navigation/native";

const data = [
  { label: 'Car', value: 'Car', popupText: ['Executive Ride', 'Luxury Option'] },
  { label: 'Tricycle', value: 'Tricycle', popupText: ['Regular Ride'] },
];

const NearbyRider = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [location, setLocation] = useState('');
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupText, setPopupText] = useState([]);
  const [selectedPopupText, setSelectedPopupText] = useState('');
  const navigation=useNavigation();

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: '#DEB253' }]}>
          Ride Type
        </Text>
      );
    }
    return null;
  };

  const handleDropdownSelect = (item) => {
    setValue(item.value);
    setIsFocus(false);
    setPopupText(item.popupText);
    setSelectedPopupText('');
    setPopupVisible(true);
  };

  const handlePopupTextSelect = (selectedValue) => {
    setSelectedPopupText(selectedValue);
    setPopupVisible(false);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const handleGetLinked = () => {
    if (!location || !value) {
      Alert.alert('Error', 'You cannot get a linked rider until all necessary inputs are filled.');
      return;
    }
    // Proceed with getting linked rider
    // ...
    navigation.navigate("RiderDone");
  };

  return (
    <AppSafeAreaView>
      <AppScrollView>
        <View style={{ marginBottom: 12 }}>
          <AppInput label="Location:" value={location} onChangeText={setLocation} />
        </View>

        <View style={styles.container}>
          {renderLabel()}
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: '#DEB253' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Select item' : '...'}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={handleDropdownSelect}
            renderLeftIcon={() => (
              <AntDesign
                style={styles.icon}
                color={isFocus ? '#DEB253' : 'black'}
                name="Safety"
                size={20}
              />
            )}
          />
        </View>

        <View style={styles.inputContainer}>
          <AppInput
            label="Number Of Passengers:"
            keyboardType="numeric"
            editable={false}
            value={`${value}\n: ${selectedPopupText}`}
          />
        </View>
        <AppButton label="Get Linked" onPress={handleGetLinked} />
      </AppScrollView>

      <Modal visible={popupVisible} transparent>
        <TouchableOpacity style={styles.popupContainer} activeOpacity={1} onPress={closePopup}>
          <View style={styles.popupContent}>
            {popupText.map((item) => (
              <TouchableOpacity
                key={item}
                style={styles.popupItem}
                onPress={() => handlePopupTextSelect(item)}
              >
                <Text style={styles.popupText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
    </AppSafeAreaView>
  );
};

export default NearbyRider;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  inputContainer: {
    flex: 1,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginRight: -16,
    marginLeft: -16,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  popupContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
  },
  popupItem: {
    paddingVertical: 8,
  },
  popupText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
