import React, { useState, useEffect, useCallback } from "react";
import { AppSafeAreaView, AppRareScrollView } from "@src/components/AppViews";
import CategorySection from "./components/CategorySection";
import PopularServices from "./components/PopularServices";
import RatedProviders from "./components/RatedProviders";
import SwitchModeInfo from "../components/SwitchModeInfo";
import useSwitchUserMode from "@src/hooks/useSwitchUserMode";
import { View, Text, StyleSheet, ScrollView, RefreshControl } from "react-native";
import * as Animatable from "react-native-animatable";
import ChatWidget from "./ChatWidget";

export default ReceiverHomeScreen = () => {
  const { isModeSwitch } = useSwitchUserMode();
  const [notificationVisible, setNotificationVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const showNotification = () => {
    setNotificationVisible(true);
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    // Simulating data fetching or any async operation
    setTimeout(() => {
      setRefreshing(false);
      showNotification();
    }, 2000);
  }, []);

  useEffect(() => {
    showNotification();
  }, []);

  

  return (
    <>
      {isModeSwitch ? (
        <SwitchModeInfo />
      ) : (
        <View style={styles.container}>
          <AppSafeAreaView>
            <ScrollView
              contentContainerStyle={styles.scrollViewContent}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
            >
              {/* <View style={styles.notificationWrapper}>
                {notificationVisible && (
                  <Animatable.View
                    animation="slideInDown"
                    style={styles.notificationContainer}
                  >
                    <Text style={styles.notificationText}>
                      Find nearby raider
                    </Text>
                  </Animatable.View>
                )}
              </View> */}
               <CategorySection />
              <PopularServices />
              <RatedProviders />
              
            </ScrollView>
            <ChatWidget />
          </AppSafeAreaView>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  notificationWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 9999,
  },
  notificationContainer: {
    backgroundColor: "#ffcc00",
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  notificationText: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "bold",
  },
  chatWidget: {
    position: "absolute",
    bottom: 20,
    right: 20,
    zIndex: 999,
  },
  chatButton: {
    backgroundColor: "#ffcc00",
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  chatSheath: {
    position: "absolute",
    bottom: 80,
    right: 20,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 10,
    elevation: 4,
  },
  chatText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
