import React from "react";
import { StyleSheet, Image, View, TouchableOpacity } from "react-native";
import { LargeText, MediumText } from "@src/components/AppText";
import { SIZES } from "@src/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const BankName = ({ title, details, imageSource, index }) => {
  const navigation = useNavigation();

  const colors = ["#FF5733", "#FF0000", "#FF33FF"]; // Add more colors if needed
  const textColors = ["#efcc90", "#FFFFFF", "#FFFF00"]; // Add more text colors if needed

  const colorIndex = index % colors.length;
  const backgroundColor = colors[colorIndex];
  const textColor = textColors[colorIndex];

  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        marginTop: 2,
        marginBottom: 30,
        alignItems: "center",
        backgroundColor,
        padding: 10,
        borderRadius: 5,
      }}
      onPress={() =>
        navigation.navigate("ProfileStack", {
          screen: "PayWithCardScreen",
        })
      }
    >
      <Image
        source={imageSource}
        style={{
          height: 50,
          width: 50,
          borderRadius: SIZES.radius,
          borderColor: "grey",
          borderWidth: 1,
          marginRight: 20,
        }}
      />
      <View style={{ flex: 1 }}>
        <LargeText>{title}</LargeText>
        <MediumText style={{ color: textColor, fontSize: 20 }}>
          {details}
        </MediumText>
      </View>
    </TouchableOpacity>
  );
};





export default BankName;

const styles = StyleSheet.create({});
