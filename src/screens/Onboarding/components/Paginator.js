import React from "react";
import { StyleSheet, View, Animated, useWindowDimensions } from "react-native";
import { COLORS } from "../../../constants/theme";

export default Paginator = ({ slides, scrollX }) => {
  const { width } = useWindowDimensions();

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
      }}
    >
      {slides.map((_, i) => {
        const indicatorWidth = scrollX.interpolate({
          inputRange: [(i - 1) * width, i * width, (i + 1) * width],
          outputRange: [10, 20, 10],
          extrapolate: "clamp",
        });

        const height = scrollX.interpolate({
          inputRange: [(i - 1) * width, i * width, (i + 1) * width],
          outputRange: [5, 5.5, 5],
          extrapolate: "clamp",
        });

        const opacity = scrollX.interpolate({
          inputRange: [(i - 1) * width, i * width, (i + 1) * width],
          outputRange: [0.25, 1, 0.25],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            key={i}
            style={[
              styles.indicator,
              { width: indicatorWidth, opacity, height },
            ]}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  indicator: {
    backgroundColor: COLORS.gold,
    marginHorizontal: 3,
    borderRadius: 5,
  },
});
