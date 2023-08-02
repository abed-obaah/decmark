import "react-native-gesture-handler";
import React, { useState,useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";
import RootNavigator from "@src/navigations/RootNavigator";
import { Provider } from "react-redux";
import { store } from "@src/store";
import { setCustomText, setCustomTextInput } from "react-native-global-props";
import { useFonts } from 'expo-font';
import "@src/global/axios";
import { Platform } from "react-native";
// import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
// import { Provider as PaperProvider } from "react-native-paper";
import thunk from "redux-thunk";
import firebase from './firebase'
import messaging from '@react-native-firebase/messaging';
// import rootReducer from "./reducers";


// const customTextProps = {
//   style: { fontFamily: "FONT_REGULAR" },
// };

// setCustomText(customTextProps);
// setCustomTextInput(customTextProps);

const App = () => {
  // useEffect(() => {
  //   // Initialize Firebase Messaging
  //   messaging().setBackgroundMessageHandler(async remoteMessage => {
  //     // Handle background notifications (optional)
  //     console.log('Message handled in the background!', remoteMessage);
  //   });
  // }, []);

  Platform.OS === 'android'&& NavigationBar.setBackgroundColorAsync("#141414");
  Platform.OS === 'android'&& NavigationBar.setButtonStyleAsync("light");

  const [fontsLoaded] = useFonts({
    'SourceSansPro-Regular': require('./src/assets/fonts/SourceSansPro-Regular.ttf'),
    'SourceSansPro-SemiBold': require('./src/assets/fonts/SourceSansPro-SemiBold.ttf'),

  });

  if (!fontsLoaded) {
    return null;
  }

  // const [isReady, setIsReady] = useState(false);

  // const LoadFonts = async () => {
  //   await useFonts();
  // };

  return (
    <Provider store={store}>
      <StatusBar style="light" />
      <RootNavigator />
    </Provider>
  );
};

export default App;
