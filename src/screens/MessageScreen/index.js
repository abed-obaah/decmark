import React, { useState } from "react";
import { View } from "react-native";
import { AppSafeAreaView } from "@src/components/AppViews";
import { MediumText, SmallText } from "@src/components/AppText";
import useTheme from "@src/hooks/useAppTheme";
import { Ionicons } from "@expo/vector-icons";
import { FlashList } from "@shopify/flash-list";
import RenderPeople from "./components/RenderPeople";
// import * as firebase from 'firebase';


export default MessageScreen = ({ navigation }) => {
  const { theme } = useTheme();
  const [people, setPeople] = useState([
    {
      name: "Abednego",
      lastMsg: "I am on my way",
      time: "Sun",
    },
    {
      name: "Abednego",
      lastMsg: "I am on my way",
      time: "Sun",
    },
    {
      name: "Abednego",
      lastMsg: "I am on my way",
      time: "Sun",
    },
  ]);
  return (
    <AppSafeAreaView>
      {people.length > 0 ? (
        <FlashList
          extraData={people}
          estimatedItemSize={150}
          data={people}
          renderItem={({ item }) => (
            <RenderPeople
              navigation={navigation}
              item={item}
              color={theme.PRIMARY_TEXT_COLOR}
            />
          )}
          keyExtractor={(_, i) => i}
        />
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons
            name="ios-chatbox-ellipses"
            color={theme.SECONDARY_TEXT_COLOR}
            size={100}
          />
          <MediumText>No Messages yet</MediumText>
          <SmallText
            style={{
              position: "absolute",
              bottom: 50,
              color: theme.PRIMARY_TEXT_COLOR,
            }}
          >
            NOTE: Chats will disappear{" "}
            <SmallText style={{ color: theme.GOLDEN_TEXT }}>7 days</SmallText>{" "}
            after closing a service
          </SmallText>
        </View>
      )}
    </AppSafeAreaView>
  );
};
