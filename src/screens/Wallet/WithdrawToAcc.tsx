import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
 
} from 'react-native';
import PageHeader from "@src/components/PageHeader";
import { AppSafeAreaView, AppScrollView } from "@src/components/AppViews";
import { MediumText,LargeText } from "@src/components/AppText";
import BankName from './components/BankNames';
import AppButton from '@src/components/AppButton';

const WithdrawToAcc = ({ amount, goBack }) => {
  const [CVV, setCVV] = useState('');
  const [AccountName, setAccountName] = useState('');
  const [BankName, setBankName] = useState("");
  const [AccountNumber, setAccountNumber] = useState('');

  // const [amount, setAmount] = useState("");
  // const [stage, setStage] = useState(0);
  // const [paymentMethod, setPaymentMethod] = useState("");

  const validateAmount = () => {
    if (amount) {
      // setStage(1);
    }
  };

  

  const handleSubmit = () => {
    // Handle form submission
    alert('still working on it');
  };

//   const formatPlaceholder = "xxxx-xxxx-xxxx-xxxx"; 
  return (
    <AppSafeAreaView>
     
      <AppScrollView>
        <View style={{ paddingHorizontal: 30, paddingVertical: 10 }}>
          <MediumText>You're Withdrawing</MediumText>
          <LargeText>NGN {amount}</LargeText>
        </View>
        {/* Include the necessary payment card details and form */}
        {/* Add any additional components or functionality specific to the Pay with Card page */}
        <View style={styles.container}>

       

        <Text style={styles.label}>Bank Name</Text>
        <TextInput
          style={styles.input}
          value={BankName}
          placeholder="Enter Bank Name"
          onChangeText={text => setBankName(text)}
        />
          
        <Text style={styles.label}>Account Number</Text>
        <TextInput
          style={styles.input}
          value={AccountNumber}
          placeholder="xxxx-xxxx-xxxx-xxxx"
          onChangeText={text => setAccountNumber(text)}
          
        />

        <Text style={styles.label}>Account Name</Text>
        <TextInput
          style={styles.input}
          value={AccountName}
          placeholder="Enter Account Name"
          onChangeText={text => setAccountName(text)}
        />

        {/* <View style={styles.rowContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Expiry</Text>
            <TextInput
              style={[styles.input, styles.grayBorder]}
              value={Expiry}
              onChangeText={text => setExpiry(text)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>CVV</Text>
            <TextInput
              style={[styles.input, styles.grayBorder]}
              value={CVV}
              onChangeText={text => setCVV(text)}
            />
          </View>
        </View> */}

        {/* <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Withdraw</Text>
        </TouchableOpacity> */}

        <AppButton
              label="Withdraw"
              marginTop={0.5}
              buttonHeight={40}
              onPress={handleSubmit}
            />
        </View>
      </AppScrollView>
      {/* <TouchableOpacity onPress={goBack} style={{ padding: 20 }}>
        <Text>Back</Text>
      </TouchableOpacity> */}
    </AppSafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    textAlign: 'left',
    alignSelf: 'stretch',
    marginBottom: 5,
  },
  input: {
    flex: 1,
    height: 40,
    width: '100%',
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    caretColor: 'gold', // Add this line to change the cursor color
  },
  grayBorder: {
    borderColor: 'gray',
    height: 40,
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
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 100,
    marginBottom: 20,
  },
  inputContainer: {
    flex: 1,
    marginRight: 10,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  mediumText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: "",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
export default WithdrawToAcc;
