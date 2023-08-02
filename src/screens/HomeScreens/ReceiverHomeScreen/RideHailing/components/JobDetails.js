import React, { useRef } from "react";
import { View, Image, Animated, StyleSheet } from "react-native";
import { AppScrollView, AppSafeAreaView } from "@src/components/AppViews";
import { MediumText, LargeText, XtraLargeText } from "@src/components/AppText";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import AppButton from "@src/components/AppButton";
import useTheme from "@src/hooks/useAppTheme";
import { useNavigation } from "@react-navigation/native";

const JobDetails = () => {
  const { theme } = useTheme();
  const navigation = useNavigation();
  const scrollY = useRef(new Animated.Value(0)).current;

  const IMG_SIZE = 200;

  const imgSize = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [IMG_SIZE, IMG_SIZE / 2],
    extrapolate: "clamp",
  });

  return (
    <AppSafeAreaView>
      <AppScrollView
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: { y: scrollY },
              },
            },
          ],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        
        <View style={styles.userInfo}>
          <XtraLargeText>
            Make Up artist for a bridal shower event
          </XtraLargeText>
        </View>
        <View style={styles.detailsRow}>
          <View style={styles.detailItem}>
            <Ionicons
              name="location-outline"
              size={20}
              color={theme.PRIMARY_TEXT_COLOR}
            />
            <MediumText style={styles.detailText}>Ikeja, Lagos</MediumText>
          </View>
          <View style={styles.detailItem}>
            <Ionicons
              name="time-outline"
              size={20}
              color={theme.PRIMARY_TEXT_COLOR}
            />
            <MediumText style={styles.detailText}>45min ago</MediumText>
          </View>
        </View>
        <View style={styles.detailsContainer}>
          <LargeText>Category</LargeText>
          <MediumText>Beauty - Make up</MediumText>
        </View>
        <View style={styles.detailsContainer}>
          <LargeText>Service</LargeText>
          <MediumText>Make up Artist</MediumText>
        </View>
        <View style={styles.detailsContainer}>
          <LargeText>Date</LargeText>
          <MediumText>Friday,june 6,2022</MediumText>
        </View>
        <View style={styles.detailsContainer}>
          <LargeText>Budget</LargeText>
          <MediumText>₦40,000</MediumText>
        </View>
        <View style={styles.detailsContainer}>
          <LargeText>Description</LargeText>
          <MediumText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </MediumText>
        </View>
        <View style={styles.detailsContainer}>
          <LargeText>Attached Files</LargeText>
          <MediumText>No attached files</MediumText>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonSpacer} />
          <AppButton label="Accept" marginTop={20} buttonHeight={45} 
               onPress={() =>
                navigation.navigate("ProfileStack", {
                  screen: "SubmitOffer",
                })
              }

          />
        </View>
      </AppScrollView>
    </AppSafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  imgContainer: (imgSize, IMG_SIZE, scrollY) => ({
    height: imgSize,
    width: imgSize,
    marginTop: scrollY.interpolate({
      inputRange: [0, 100],
      outputRange: [0, IMG_SIZE / 2],
      extrapolate: "clamp",
    }),
  }),
  img: (IMG_SIZE) => ({
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    borderRadius: IMG_SIZE / 2,
  }),
  userInfo: {
    alignItems: "center",
    marginTop: 20,
  },
  detailsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  detailItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  detailText: {
    marginLeft: 3.5,
  },
  detailsContainer: {
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    marginBottom: 15,
  },
  buttonSpacer: {
    width: 20,
  },
});

export default JobDetails;
