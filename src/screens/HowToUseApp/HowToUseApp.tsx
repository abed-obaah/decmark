import React from "react";
import { View, StyleSheet, TouchableOpacity, Linking } from "react-native";
import { LargeText } from "@src/components/AppText";
import AppButton from "@src/components/AppButton";
import {
  AppView,
  AppScrollView,
  AppSafeAreaView,
} from "@src/components/AppViews";

const HowToUseAppScreen = () => {
  const openYouTubeLink = () => {
    const youtubeLink = "https://www.youtube.com/watch?v=YOUR_VIDEO_ID"; // Replace with your YouTube video link
    Linking.openURL(youtubeLink);
  };

  return (
    <AppSafeAreaView>
      <AppScrollView>
        <View style={styles.container}>
          <LargeText style={styles.largeText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
            a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
            of Lorem Ipsum.
          </LargeText>
          <TouchableOpacity onPress={openYouTubeLink}>
            <View style={styles.videoFrame}>
              {/* Your video frame component here */}
              <LargeText style={styles.videoText}>Click to Watch Video</LargeText>
            </View>
          </TouchableOpacity>
        </View>
      </AppScrollView>
    </AppSafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  largeText: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: "center",
    marginBottom: 20,
  },
  videoFrame: {
    width: 300,
    height: 200,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  videoText: {
    fontSize: 16,
    color: "white",
  },
});

export default HowToUseAppScreen;
