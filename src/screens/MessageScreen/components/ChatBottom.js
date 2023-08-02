import React, { useState, useEffect } from 'react';
import { View, Platform, KeyboardAvoidingView, StyleSheet } from 'react-native';
// import { GiftedChat } from 'react-native-gifted-chat';
// import Pusher from '@pusher//pusher-js';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const pusher = new Pusher('YOUR_PUSHER_APP_KEY', {
      cluster: 'PUSHER_CLUSTER',
      encrypted: true,
    });

    const channel = pusher.subscribe('chat_channel');

    channel.bind('message', (data) => {
      const { message, sender } = data;
      const newMessage = {
        _id: messages.length + 1,
        text: message,
        createdAt: new Date(),
        user: {
          _id: sender,
          name: 'User', // Set the user name as you like
        },
      };
      setMessages((previousMessages) => GiftedChat.append(previousMessages, [newMessage]));
    });

    // Clean up subscriptions when component unmounts
    return () => {
      pusher.unsubscribe('chat_channel');
    };
  }, []);

  const handleSend = (newMessages = []) => {
    setMessages((previousMessages) => GiftedChat.append(previousMessages, newMessages));
    // Implement code to send the message to Pusher server here
  };

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        onSend={handleSend}
        user={{
          _id: 1,
          name: 'User', // Set the user name as you like
        }}
      />
      {Platform.OS === 'android' && <KeyboardAvoidingView behavior="padding" />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ChatScreen;
