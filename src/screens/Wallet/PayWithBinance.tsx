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



const PayWithBinance = () => {
 

  return (
    <AppSafeAreaView>
        <AppScrollView>
        
        <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
          <LargeText>Copy the wallet address below and make transfer to the Account.</LargeText>
        </View>
        <View style={styles.container}>

       

        <View style={styles.rowContainer}>
                    <View style={styles.boxContainer}>
                        <Image
                            source={require("../../assets/images/Copy.png")}
                            style={styles.image}
                        />
                    <LargeText>5K1d7c5m4tpgPtQuWAbNc5ZWqBDiztActisg2qFDxhYEXBqB9e</LargeText>
                </View>
        </View>
       

        {/* <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Pay NGN 40,000</Text>
        </TouchableOpacity> */}
        </View>
        

        </AppScrollView>
    </AppSafeAreaView>
   
  );
};

export default PayWithBinance;

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
    image: {
        flex: 1,
        width: 20,
        height: 20,
        borderRadius: 20,
        marginLeft: 10,
        marginRight: 10,
      },
     
    rowContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      height: 100,
      marginRight:50,
    //   marginBottom: ,
    },
    boxContainer: {
        flexDirection: "row",
        marginRight:10,
        
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
      width: 20,
      height: 50,
      resizeMode: 'contain',
      marginTop: -20,
      marginRight: 10,
      marginLeft: 10,
    },
    button: {
      backgroundColor: '#172b43',
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
// export default PayWithCardScreen;
