import { StyleSheet, View } from "react-native";
import React from "react";

import { FlashList } from "@shopify/flash-list";
import RenderMessages from "./RenderMessages";
const ChatBody = ({ messages }) => {
  return (
    <View style={styles.body}>
      <FlashList
        extraData={messages}
        inverted={true}
        estimatedItemSize={151}
        data={messages}
        renderItem={RenderMessages}
        keyExtractor={(_, i) => i}
      />
    </View>
  );
};

export default ChatBody;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingHorizontal: 5,
  },
});
