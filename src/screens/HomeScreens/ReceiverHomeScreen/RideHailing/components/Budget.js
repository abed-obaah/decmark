import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { AppScrollView, AppSafeAreaView } from "@src/components/AppViews";
import { LargeText, MediumText } from "@src/components/AppText";
import AppButton from "@src/components/AppButton";
import { FontAwesome } from '@expo/vector-icons'; 

const LargeInput = () => {
  const [value, setValue] = useState('0');

  const handleInputChange = (text) => {
    let numericValue = text.replace(/\D/g, '');
    if (numericValue.length > 3) {
      numericValue = numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    setValue(numericValue);
  };

  const incrementValue = () => {
    setValue((prevValue) => String(parseInt(prevValue) + 1));
  };

  const decrementValue = () => {
    setValue((prevValue) => String(parseInt(prevValue) - 1));
  };

  return (
    <AppSafeAreaView>
      <AppScrollView contentContainerStyle={styles.container}>
        <View style={styles.inputContainer}>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={incrementValue}>
              <FontAwesome name="angle-right" size={24} color="#999999" style={[styles.icon, styles.invertedIcon]} />
            </TouchableOpacity>
            <TouchableOpacity onPress={decrementValue}>
              <FontAwesome name="angle-left" size={24} color="#999999" style={[styles.icon, styles.invertedIcon]} />
            </TouchableOpacity>
          </View>
          <TextInput
            style={styles.input}
            value={`₦${value}`}
            keyboardType="numeric"
            onChangeText={handleInputChange}
            placeholder="Enter value"
          />
        </View>
        <View>
          <MediumText>Enter amount</MediumText>
        </View>
        <View style={styles.buttonContainer}>
          <AppButton
            label="Post"
          />
        </View>
      </AppScrollView>
    </AppSafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerBudget: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DEB253',
    borderRadius: 8,
    backgroundColor: '#eeeade',
    padding: 10,
    width: "50%"
  },
  iconContainer: {
    flexDirection: 'column',
  },
  icon: {
    marginRight: 10,
    fontSize: 30
  },
  invertedIcon: {
    transform: [{ rotate: '-90deg' }],
  },
  input: {
    flex: 1,
    fontSize: 39,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 90,
    width: "50%",
    alignItems: "center",
  },
});

export default LargeInput;
