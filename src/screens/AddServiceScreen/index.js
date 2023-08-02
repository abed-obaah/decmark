import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  FlatList,
  Text,
  ActivityIndicator,
  RefreshControl,
  Modal,
  TouchableOpacity,
  Animated,
  StyleSheet,
  Image,
} from "react-native";
import { AppSafeAreaView, AppScrollView } from "@src/components/AppViews";
import AppInput from "@src/components/AppInput";
import AppButton from "@src/components/AppButton";
import AppTextarea from "@src/components/AppTextarea";
import axios from "axios";

const AddServiceScreen = () => {
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("My Service Title"); // Update with a valid title
  const [coordinate, setCoordinate] = useState([1, 0]);
  const baseUrl = "https://api.decmark.com/v1/user";
  const apiKey = "base64:vhMcjElk3d0BYItZB09fP5MbUEPXH2JRtqW3G5/tKSk="; // Replace with your actual API key

  const postServiceApi = () => {
    const requestBody = {
      type,
      title,
      location,
      price,
      duration,
      description,
      coordinate,
    };

    console.log("Input values:", requestBody);

    axios
      .post(`${baseUrl}/services/store`, requestBody, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      })
      .then((res) => {
        setVisible(true);
        console.log("Response:", res.data); // Handle the response data here
      })
      .catch((err) => {
        console.log("The error is:", err.response); // Handle any error that occurs during the request
      });
  };

  const ModalPopup = ({ visible, children }) => {
    const [showModal, setShowModal] = useState(visible);
    const scaleValue = useRef(new Animated.Value(0)).current;
    useEffect(() => {
      toggleModal();
    }, [visible]);
  
    const toggleModal = () => {
      if (visible) {
        setShowModal(true);
        Animated.spring(scaleValue, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
      } else {
        Animated.timing(scaleValue, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start(() => {
          setShowModal(false);
        });
      }
  
      // if (visible) {
      //   setTimeout(() => {
      //     setShowModal(false);
      //   }, 4000);
      // }
    };

    return (
      <Modal transparent visible={showModal}>
        <View style={styles.modalBackground}>
          <Animated.View
            style={[styles.modalContainer, { transform: [{ scale: scaleValue }] }]}
          >
            {children}
          </Animated.View>
        </View>
      </Modal>
    );
  };
  
  const [visible, setVisible] = useState(false);

  return (
    
    <AppSafeAreaView>
      <AppScrollView>
        <View>
          <ModalPopup visible={visible}>
            <View style={{ alignItems: 'center' }}>
              <View style={styles.header}>
                <TouchableOpacity onPress={() => setVisible(false)}>
                  <Image
                    source={require('../../../assets/x.png')}
                    style={{ height: 30, width: 30 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Image
                source={require('../../../assets/success.png')}
                style={{ height: 150, width: 150, marginVertical: 10 }}
              />
            </View>
            <Text style={{ marginVertical: 30, fontSize: 20, textAlign: 'center' }}>
              Congratulations! You created a service.
            </Text>
          </ModalPopup>
        </View>
          
        <AppInput
          label="Category"
          value={type}
          onChangeText={(value) => setType(value)}
        />
        <AppInput
          label="Location"
          value={location}
          onChangeText={(value) => setLocation(value)}
        />
        <AppInput
          label="Budget"
          keyboardType="numeric"
          value={price}
          onChangeText={(value) => setPrice(value)}
        />
        <AppInput
          label="Title"
          value={title}
          onChangeText={(value) => setTitle(value)}
        />
        <AppInput
          label="Duration (Hours)"
          keyboardType="numeric"
          value={duration}
          onChangeText={(value) => setDuration(value)}
        />
        <AppInput
          label="Description"
          value={description}
          onChangeText={(value) => setDescription(value)}
        />
        <AppButton label="Post" onPress={postServiceApi} />
      </AppScrollView>
    </AppSafeAreaView>
  );
};

export default AddServiceScreen;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
  header: {
    width: '100%',
    height: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});
