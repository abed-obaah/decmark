import React, { FC } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";

interface AppLoaderProps {
  rounded?: boolean;
}

const AppLoader: FC<AppLoaderProps> = ({ rounded }) => {
  return (
    <View
      style={[
        StyleSheet.absoluteFillObject,
        styles.container,
        { borderRadius: rounded ? 200 : 0 },
      ]}
    >
      <ActivityIndicator size="large" color="#DEB253" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,.5)",
    zIndex: 1,
  },
});

export default AppLoader;
