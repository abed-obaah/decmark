import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, ActivityIndicator, RefreshControl, StyleSheet } from 'react-native';
import { SmallText, MediumText } from '@src/components/AppText';
import AppButton from '@src/components/AppButton';
import { SIZES } from '@src/constants/theme';
import useTheme from '@src/hooks/useAppTheme';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import axios from 'axios';

const MyServices = () => {
  const { theme } = useTheme();
  const navigation = useNavigation();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false); // New state for empty services

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      setRefreshing(true); // Set refreshing to true before making the request
      const response = await axios.get('https://api.decmark.com/v1/user/artisan/appointments');
      const data = response.data.data;
      setServices(data);
      setIsEmpty(data.length === 0); // Check if services array is empty and set isEmpty accordingly
      setLoading(false); // Set loading to false when the data is fetched
      setRefreshing(false); // Set refreshing to false after the data is fetched
    } catch (error) {
      console.log('Error fetching services:', error);
      setLoading(false); // Set loading to false even if there's an error
      setRefreshing(false); // Set refreshing to false if there's an error
    }
  };

  const Service = ({ item }) => {
    const { theme } = useTheme();
    const navigation = useNavigation();
     // Destructure the fields
    const {
      price,
      description,
      location,
      type,
      recieverType,
      reciever,
      dueDate,
      times,
      status
    } = item;

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
                {reciever.name}
              </MediumText>
              <MediumText
                numberOfLines={1}
                style={{
                  color: theme.PRIMARY_TEXT_COLOR,
                  // fontFamily: "FONT_SEMI_BOLD",
                }}
              >
                {recieverType}
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
          <SmallText>{description}</SmallText>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 15,
            }}
          >
            <Ionicons name="time-outline" size={20} color={theme.gold} />
            <SmallText
              numberOfLines={1}
              style={{
                color: theme.PRIMARY_TEXT_COLOR,
                marginRight: 65,
              }}
            >
              {times} hours
            </SmallText>
            <Ionicons name="time-outline" size={20} color={theme.gold} />
            <SmallText
              numberOfLines={1}
              style={{
                color: theme.PRIMARY_TEXT_COLOR,
                marginLeft: 5,
              }}
            >
              {dueDate} hours
            </SmallText>
          </View>
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
                {location.coordinates}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 15,
            }}
          >
            <AppButton
              label={status}
              marginTop={0.5}
              buttonHeight={45}
              onPress={() =>
                navigation.navigate("ServiceStack", {
                  screen: "OfferDetailScreen",
                })
              }
            />
          </View>
        </View>
      </View>
    );
  };

  const handleRefresh = () => {
     // Call the fetchServices function to refresh the data
    fetchServices();
  };

  return (
    <View style={{ flex: 1 }}>
      {loading ? (
        // Show loader while the API is loading
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color={theme.PRIMARY_COLOR} />
        </View>
      ) : isEmpty ? ( // Check if the services array is empty and render the sad emoticon and message
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <MaterialCommunityIcons name="emoticon-sad-outline" size={100} color={theme.PRIMARY_TEXT_COLOR} />
          <MediumText style={styles.text(theme)}>
            You don't have any Booked Services
          </MediumText>
        </View>
      ) : (
        // Show service list when the data is loaded and services are present
        <FlatList
          data={services}
          bounces={false}
          contentContainerStyle={{ marginVertical: 15, paddingHorizontal: 20 }}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({ item }) => <Service item={item} />}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} colors={[theme.PRIMARY_COLOR]} />
          }
        />
      )}
    </View>
  );
};

export default MyServices;
const styles = StyleSheet.create({
  text: (theme) => ({
    color: theme.PRIMARY_TEXT_COLOR,
    marginTop: 15,
  }),
});
