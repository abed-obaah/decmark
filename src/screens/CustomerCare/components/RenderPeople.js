import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";

import { MediumText } from "@src/components/AppText";

const RenderPeople = ({ item, color, navigation }) => {
  const navigateToChat = () => {
    navigation.navigate("OthersStack", {
      screen: "ChattingScreen",
      params: item,
    });
  };
  return (
    <TouchableOpacity
      onPress={navigateToChat}
      style={{
        flexDirection: "row",
        paddingHorizontal: 25,
        paddingVertical: 10,
        alignItems: "center",
      }}
    >
      <Image
        style={{
          width: 55,
          height: 55,
          borderRadius: 30,
          marginRight: 20,
        }}
        source={require("../../../assets/images/my_avatar.png")}
      />
      <View style={{ flex: 1 }}>
        <MediumText style={{ color, fontFamily: "SourceSansPro-SemiBold" }}>
          {item.name}
        </MediumText>
        <MediumText>{item.lastMsg}</MediumText>
      </View>
      <View>
        <MediumText>{item.time}</MediumText>
      </View>
    </TouchableOpacity>
  );
};

export default RenderPeople;

const styles = StyleSheet.create({});
