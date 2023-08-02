import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { MediumText, LargeText } from "@src/components/AppText";
import { AppSafeAreaView, AppScrollView } from "@src/components/AppViews";

const StylistCard = ({ name, occupation, navigation }) => {
  return (
    <AppSafeAreaView>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ProfileStack", {
            screen: "users",
          })
        }
      >
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            {/* Placeholder image */}
            <Image
              source={require("../../../assets/images/black.png")}
              style={styles.image}
            />
          </View>
          <View style={styles.textContainer}>
            <LargeText>abed{name}</LargeText>
            <MediumText>dev{occupation}</MediumText>
          </View>
        </View>
      </TouchableOpacity>

      <View style={styles.container}>
        <View style={styles.imageContainer}>
          {/* Placeholder image */}
          <Image
            source={require("../../../assets/images/black.png")}
            style={styles.image}
          />
        </View>
        <View style={styles.textContainer}>
          <LargeText> chichi{name}</LargeText>
          <MediumText>designer{occupation}</MediumText>
        </View>
      </View>
    </AppSafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: "hidden",
    marginRight: 10,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover",
  },
  textContainer: {
    flex: 1,
  },
});

export default StylistCard;
