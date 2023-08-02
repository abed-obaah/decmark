import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { AppScrollView, AppSafeAreaView } from "@src/components/AppViews";
import MyAvatar from "@src/global/MyAvatar";
import { Ionicons } from "@expo/vector-icons";
import useTheme from "@src/hooks/useAppTheme";
import { MediumText, LargeText } from "@src/components/AppText";
import { useAppSelector, useAppDispatch } from "@src/hooks/useAppStore";
import { COLORS } from "@src/constants/theme";
import * as ImagePicker from "expo-image-picker";
import { uploadProfileImg } from "@src/redux/accountSlice";
import axios from "axios";

const AccountScreen = ({ navigation }: any) => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const { userInfo } = useAppSelector((state) => state.auth);

  const handlePickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const data = new FormData();
      data.append("image", {
        uri: result.assets[0].uri,
        name: result.assets[0].fileName,
        type: `image/${
          result.assets[0].uri.split(".")[
            result.assets[0].uri.split(".").length - 1
          ]
        }`,
      });
      dispatch(uploadProfileImg(data));
    }
  };

  // useEffect(() => {
  //   const fetchProfileImage = async () => {
  //     try {
  //       // Make an HTTP GET request to fetch the profile image URL from the API
  //       const response = await axios.get("https://api.decmark.com/v1/user/account/update");

  //       // Retrieve the image URL from the response
  //       const imageUrl = response.data.image_url;

  //       // Update the selectedImage state with the fetched image URL
  //       setSelectedImage(imageUrl);
  //     } catch (error) {
  //       // Handle any errors that occur during the fetching process
  //       console.error(error);
  //     }
  //   };

  //   // Call the fetchProfileImage function when the component mounts
  //   fetchProfileImage();
  // }, []);

  const options = [
    {
      name: "Edit profile",
      path: "EditProfileScreen", // Update the path to navigate to the desired screen
      icon: (
        <Ionicons
          name="person-outline"
          size={20}
          color={theme.SECONDARY_TEXT_COLOR}
        />
      ),
    },
    {
      name: "Activities",
      path: "ActivitiesScreen", // Update the path to navigate to the desired screen
      icon: (
        <Ionicons name="list" size={20} color={theme.SECONDARY_TEXT_COLOR} />
      ),
    },
    {
      name: "Privacy Policy",
      path: "PrivacyPolicyScreen", // Update the path to navigate to the desired screen
      icon: (
        <Ionicons
          name="shield-checkmark-outline"
          size={20}
          color={theme.SECONDARY_TEXT_COLOR}
        />
      ),
    },
    {
      name: "Change Language",
      path: "ChangeLanguageScreen", // Update the path to navigate to the desired screen
      icon: (
        <Ionicons
          name="logo-google"
          size={20}
          color={theme.SECONDARY_TEXT_COLOR}
        />
      ),
    },
  ];

  return (
    <AppSafeAreaView>
      <AppScrollView>
        <View style={styles.avatar}>
          <View style={{ position: "relative" }}>
            <MyAvatar size={200} iconSize={100} />
            <TouchableOpacity
              style={[{ backgroundColor: COLORS.gold }, styles.editAvatar]}
              onPress={handlePickImage}
            >
              <Ionicons name="ios-camera" size={22} color={COLORS.dark} />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
            marginVertical: 15,
          }}
        >
          <LargeText>
            {userInfo?.data?.first_name} {userInfo?.data?.last_name}
          </LargeText>
          <MediumText>{userInfo?.data?.email}</MediumText>
        </View>
        <View style={{ marginTop: 20 }}>
          {options.map((item, i) => (
            <View
              key={i}
              style={{
                marginBottom: 20,
                borderBottomWidth: 1,
                borderBottomColor: theme.PRIMARY_BORDER_COLOR,
              }}
            >
              <TouchableOpacity
                style={{
                  paddingBottom: 20,
                  flexDirection: "row",
                  alignItems: "center",
                }}
                onPress={() => navigation.navigate(item.path)}
              >
                {item.icon}
                <MediumText
                  style={{
                    color: theme.PRIMARY_TEXT_COLOR,
                    paddingHorizontal: 10,
                  }}
                >
                  {item.name}
                </MediumText>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </AppScrollView>
    </AppSafeAreaView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  avatar: {
    alignItems: "center",
    marginTop: 10,
  },
  editAvatar: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    zIndex: 1,
  },
});

function setSelectedImage(imageUrl: any) {
  throw new Error("Function not implemented.");
}

