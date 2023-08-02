import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { LargeText } from "@src/components/AppText";
import { useNavigation } from "@react-navigation/native";
import { AppSafeAreaView, AppScrollView } from "@src/components/AppViews";
import AppButton from "@src/components/AppButton";

const Rider = ({ user }) => {
  const navigation = useNavigation();

  const handleConfirm = () => {
    // Perform tipping logic here
    navigation.navigate("NearbyRider");
    
  };

//   const handleDecline = () => {
//     navigation.navigate("ProfileStack", {
//         screen: "MenuScreen",
//       })
//   };

  return (
    <AppSafeAreaView>
      <AppScrollView>
                    <View style={styles.container}>
                    <LargeText style={styles.title}>Get Linked Nearby</LargeText>
                    <LargeText style={styles.username}>
                    Get Linked to a nearby Rider instead of taking the long steps.
                        {/* {user.username} */}
                        </LargeText>
                    <View style={styles.buttonContainer}>
                        {/* <TouchableOpacity
                        style={[styles.button, { backgroundColor: "green" }]}
                        onPress={handleConfirm}
                        >
                        <LargeText style={styles.buttonText}>Confirm</LargeText>
                        </TouchableOpacity> */}
                        {/* <TouchableOpacity
                        style={[styles.button, { backgroundColor: "red" }]}
                        onPress={handleDecline}
                        >
                        <LargeText style={styles.buttonText}>Decline</LargeText>
                        </TouchableOpacity> */}
                        <AppButton label="Get Linked" onPress={handleConfirm} />
                    </View>
                    </View>
      </AppScrollView>
      </AppSafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#fff",
    marginTop:120
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  username: {
    fontSize: 18,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  largeText: {
    fontSize: 24,
    marginTop: 20,
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default Rider;
