import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { AppSafeAreaView } from "@src/components/AppViews";
import PageHeader from "@src/components/PageHeader";
// import ChatScreen from "./components/ChatBottom";
import ChatBody from "./components/ChatBody";
import ChatBottom from "./components/ChatBottom";

const ChattingScreen = ({ route }) => {
  const data = route.params;
  const [messages, setMessages] = useState([
    {
      msg: "Hi",
      user: "me",
    },
    {
      msg: "Hi there",
      user: "other",
    },
  ]);
  return (
    <AppSafeAreaView>
      <PageHeader title={data.name} />
      <ChatBody messages={messages} />
      <ChatBottom />
    </AppSafeAreaView>
  );
};

export default ChattingScreen;

const styles = StyleSheet.create({});
