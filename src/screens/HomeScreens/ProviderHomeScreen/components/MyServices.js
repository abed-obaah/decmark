import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  FlatList,
  Text,
  ActivityIndicator,
  RefreshControl,
  // Modal,
  // TouchableOpacity,
  // Animated,
  StyleSheet,
  // Image,
} from "react-native";
import { SmallText, MediumText } from "@src/components/AppText";
import AppButton from "@src/components/AppButton";
import { SIZES } from "@src/constants/theme";
import useTheme from "@src/hooks/useAppTheme";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const MyServices = () => {
  const { theme } = useTheme();
  const navigation = useNavigation();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      setRefreshing(true); // Set refreshing to true before making the request
      const response = await axios.get("https://api.decmark.com/v1/user/services/allservices");
      const data = response.data.data;
      console.log(data); // Check the API response data
      setServices(data);
      setLoading(false); // Set loading to false when the data is fetched
      setRefreshing(false); // Set refreshing to false after the data is fetched
    } catch (error) {
      console.log("Error fetching services:", error);
      setLoading(false); // Set loading to false even if there's an error
      setRefreshing(false); // Set refreshing to false if there's an error
    }
  };

  

  const Service = ({ item }) => {
    const { theme } = useTheme();
    const navigation = useNavigation();
    const {
      category,
      title,
      price,
      description,
      location,
      type,
      coordinate,
      provider
    } = item; // Destructure the fields
  
   
  
    return (
      <View
        style={{
          backgroundColor: "transparent",
          width: "100%",
          marginBottom: 20,
          borderWidth: 1,
          borderRadius: SIZES.radius,
          borderColor: theme.PRIMARY_BORDER_COLOR,
        }}
      >
        
        <View style={{ padding: 10 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 10,
            }}
          >
            <View>
              <MediumText
                numberOfLines={1}
                style={{
                  color: theme.PRIMARY_TEXT_COLOR,
                  // fontFamily: "FONT_SEMI_BOLD",
                }}
              >
                {provider.name}
              </MediumText>
              <MediumText>{type}</MediumText>
            </View>
            <View>
              <MediumText
                style={{
                  color: theme.PRIMARY_TEXT_COLOR,
                  // fontFamily: "FONT_SEMI_BOLD",
                }}
              >
                ₦{price}
              </MediumText>
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Ionicons name="star" size={12} color={theme.gold} />
                <Ionicons name="star" size={12} color={theme.gold} />
                <Ionicons name="star" size={12} color={theme.gold} />
                <Ionicons name="star" size={12} color={theme.gold} />
                <Ionicons name="star" size={12} color={theme.gold} />
              </View>
            </View>
          </View>
          <SmallText>{title}</SmallText>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 25,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                width: "60%",
              }}
            >
              <Ionicons name="location-outline" size={20} color={theme.gold} />
              <Text
                numberOfLines={1}
                style={{
                  color: theme.PRIMARY_TEXT_COLOR,
                  marginLeft: 1,
                }}
              >
                {coordinate}
              </Text>
            </View>
            <AppButton
              label="Update"
              marginTop={0.5}
              buttonHeight={40}
              onPress={() => navigation.navigate('ProfileStack',
               { screen: 'EditService' })}
              // onPress={() => setVisible(true)}
            />
          </View>
        </View>
      </View>
    );
  };

  const handleRefresh = () => {
    fetchServices(); // Call the fetchServices function to refresh the data
  };

  return (
    <View style={{ flex: 1 }}>
      {loading ? (
        // Show loader while the API is loading
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color={theme.PRIMARY_COLOR} />
        </View>
      ) : (
        // Show service list when the data is loaded
        <FlatList
          data={services}
          bounces={false}
          contentContainerStyle={{ marginVertical: 15, paddingHorizontal: 20 }}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({ item }) => <Service item={item} />}
          refreshControl={(
            <RefreshControl
              refreshing={refreshing}
              onRefresh={handleRefresh}
             colors={[theme.PRIMARY_COLOR]}
            />
          )}
        />
      )}
    </View>
  );
};



export default MyServices;
