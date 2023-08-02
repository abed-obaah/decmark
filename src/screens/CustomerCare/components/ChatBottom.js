import { StyleSheet, TextInput, View, TouchableOpacity, FlatList, Text, Button } from "react-native";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { COLORS } from "@src/constants/theme";
import SendSVG from "@src/assets/svg/SendSVG";

const ChatBottom = ({ message, setMessage }) => {
  return (
    <View style={styles.messageview}>
      {/* <View style={styles.inputview}>
        <Entypo name="emoji-happy" size={20} style={{ marginRight: 10 }} />
        <TextInput
          value={message}
          onChangeText={setMessage}
          placeholder="Message"
          placeholderTextColor={COLORS.lightGrey}
          style={styles.messageinput}
        />
      </View> */}
      {/* <TouchableOpacity style={styles.sendbutton}>
        <SendSVG />
      </TouchableOpacity> */}
      <ChatScreen />
    </View>
  );
};

const ChatScreen = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleSend = () => {
    if (message.trim() !== '') {
      setMessages([...messages, message]);
      setMessage('');
    }
  };

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <View style={[styles.messageContainer, { alignSelf: 'flex-end' }]}>
            <Text style={styles.messageText}>{item}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={styles.inputview}>
          <TouchableOpacity onPress={toggleEmojiPicker}>
            <Entypo name="emoji-happy" size={20} style={{ marginRight: 10 }} />
          </TouchableOpacity>
          <TextInput
            onChangeText={(text) => setMessage(text)}
            value={message}
            placeholder="Write a Message"
            placeholderTextColor={COLORS.lightGrey}
            style={styles.messageinput}
          />
        </View>
        <TouchableOpacity style={styles.sendbutton} onPress={handleSend}>
          <SendSVG />
        </TouchableOpacity>
      </View>
      {showEmojiPicker && <EmojiPicker />}
    </View>
  );
};

export default ChatBottom;

const styles = StyleSheet.create({
  messageview: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  sendbutton: {
    backgroundColor: "black",
    height: 50,
    width: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  messageinput: {
    flex: 1,
    fontFamily: "SourceSansPro-SemiBold",
    color: "black",
    marginRight: 5,
  },
  inputview: {
    flex: 1,
    backgroundColor: COLORS.lightGold,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
    paddingHorizontal: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  messageContainer: {
    backgroundColor: COLORS.lightGold,
    marginTop: 10,
    maxWidth: "80%", // Reduce the width as per your preference
    alignSelf: "flex-end", // Push the container to the right
     marginBottom: 2,
  },
  messageText: {
    margin: 10,
    color: "black",
   
  },
});
