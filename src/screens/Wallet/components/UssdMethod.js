import { StyleSheet, Image, View, TouchableOpacity } from "react-native";
import React from "react";
import { LargeText, MediumText } from "@src/components/AppText";
import { SIZES } from "@src/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


const showsc =() => {
  alert("pay with ussd");
}
const UssdMethod = ({ title, details }) => {
  const navigation = useNavigation();
  
  const bankData = [
    { bank: 'Access Bank', ussdCode: '*901#' },
    { bank: 'First Bank', ussdCode: '*894#' },
    { bank: 'GTBank', ussdCode: '*737#' },
    { bank: 'Zenith Bank', ussdCode: '*966#' },
    { bank: 'UBA', ussdCode: '*919#' },
    { bank: 'Fidelity Bank', ussdCode: '*770#' },
    // Add more banks and USSD codes here
  ];

  return (
    <TouchableOpacity
      style={{ flexDirection: "row", marginTop: 30, alignItems: "center" }}
      onPress={() =>
        navigation.navigate("ProfileStack", {
          screen: "PayWithUssd",
        })
      }
    >
      <Image
      source={require('../../../assets/images/ussd.png')}
        style={{
          height: 40,
          width: 40,
          borderRadius: SIZES.radius,
          borderColor: "grey",
          borderWidth: 1,
          marginRight: 20,
        }}
      />
      <View style={{ flex: 1 }}>
        <LargeText>{title}</LargeText>
        <MediumText>{details}</MediumText>
      </View>
      <Ionicons size={20} name={"chevron-forward-outline"} />
    </TouchableOpacity>
  );
};

export default UssdMethod;

const styles = StyleSheet.create({});
