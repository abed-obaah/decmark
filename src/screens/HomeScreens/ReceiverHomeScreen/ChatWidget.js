import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import useTheme from "@src/hooks/useAppTheme";

const ChatWidget = () => {
    const navigation = useNavigation();
  const [isChatOpen, setChatOpen] = useState(false);
  const [counter, setCounter] = useState(3);
  const animation = useRef(new Animated.Value(0)).current;

  const toggleChat = () => {
    setChatOpen(!isChatOpen);
    setCounter(3); // Reset counter when chat is opened

    // Reset animation
    animation.setValue(0);

    // Toggle the animation
    Animated.timing(animation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const chatSheathStyles = [
    styles.chatSheath,
    {
      borderColor: isChatOpen ? "#ffcc00" : "transparent",
      transform: [
        {
          scaleY: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          }),
        },
      ],
    },
  ];

  return (
    <View style={styles.chatWidget}>
      {isChatOpen ? (
        <Animated.View style={chatSheathStyles}>
          {/* Chat widget content */}
          <TouchableOpacity style={styles.item}
           onPress={() =>
            navigation.navigate("ProfileStack", {
              screen: "Rider",
            })
          }
          >
            <Ionicons name="car-outline" size={32} color="black" />
            <Text style={styles.itemText}>Get a Rider</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item}
            onPress={() =>
                navigation.navigate("ProfileStack", {
                  screen: "PostService",
                })
              }
          >
            <Ionicons name="hammer-outline" size={32} color="black" />
            <Text style={styles.itemText}>Post a Service</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item}
           onPress={() =>
            navigation.navigate("ProfileStack", {
              screen: "GetProvider",
            })
          }
          >
            <Ionicons name="build-outline" size={32} color="black" />
            <Text style={styles.itemText}>Service Provider</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleChat} style={styles.cancelButton}>
            <Ionicons name="close-outline" size={24} color="black" />
          </TouchableOpacity>
        </Animated.View>
      ) : (
        <TouchableOpacity onPress={toggleChat} style={styles.chatButton}>
          <Ionicons name="ellipsis-horizontal-outline" size={24} color="white" />
          {counter > 0 && <View style={styles.counterContainer}><Text style={styles.counterText}>{counter}</Text></View>}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ChatWidget;

const { width } = Dimensions.get("window");
const chatWidgetSize = 50;
const counterSize = 20;

const styles = StyleSheet.create({
  chatWidget: {
    position: "absolute",
    bottom: 20,
    right: 20,
    zIndex: 999,
  },
  chatButton: {
    backgroundColor: "#DEB253",
    borderRadius: chatWidgetSize / 2,
    width: chatWidgetSize,
    height: chatWidgetSize,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  chatSheath: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 10,
    elevation: 4,
    minHeight: chatWidgetSize, // Adjusted height
    minWidth: width * 0.5, // Adjusted width
    borderWidth: 2,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  itemText: {
    marginLeft: 10,
    fontSize: 16,
  },
  cancelButton: {
    position: "absolute",
    top: 5,
    right: 5,
  },
  counterContainer: {
    position: "absolute",
    top: -counterSize / 4,
    right: -counterSize / 4,
    backgroundColor: "red",
    borderRadius: counterSize / 2,
    width: counterSize,
    height: counterSize,
    justifyContent: "center",
    alignItems: "center",
  },
  counterText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});
