import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  Image,
 
} from 'react-native';
import PageHeader from "@src/components/PageHeader";
import { AppSafeAreaView, AppScrollView } from "@src/components/AppViews";
import { MediumText,LargeText } from "@src/components/AppText";

const PayWithCardScreen = ({ amount, goBack }) => {

  const validateAmount = () => {
    if (amount) {
      // setStage(1);
    }
  };

  

  // const handleSubmit = () => {
  //   // Handle form submission
  //   alert('still working on it');
  // };

  const formatPlaceholder = "xxxx-xxxx-xxxx-xxxx"; 
  return (
    <AppSafeAreaView>
      <AppScrollView>
        <View style={{ paddingHorizontal: 30, paddingVertical: 10 }}>
          <MediumText>Copy the account number below and make transfer to the account.</MediumText>
        </View>
        
        <View style={styles.container}>
        <Image
          source={require("../../assets/images/Copy.png")}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <LargeText>0011232415</LargeText>
          <Text>Wema Bank</Text>
          <Text>DECMARK-FTW/DOMINIC PRAISE</Text>
        </View>
      </View>
      </AppScrollView>
    
    </AppSafeAreaView>
  );
};
const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
    },
    image: {
      width: 40,
      height: 40,
    //   borderRadius: SIZES.radius,
    //   borderColor: "grey",
      borderWidth: 1,
      marginRight: 20,
    },
    textContainer: {
      flex: 1,
    },
  });
export default PayWithCardScreen;
