import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  FlatList,
  Text,
  ActivityIndicator,
  RefreshControl,
  StyleSheet,
} from 'react-native';
import { SmallText, MediumText } from '@src/components/AppText';
import AppButton from '@src/components/AppButton';
import { SIZES } from '@src/constants/theme';
import useTheme from '@src/hooks/useAppTheme';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

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
      const response = await axios.get('https://api.decmark.com/v1/user/artisan/appointments/settled');
      const data = response.data.data;
      setServices(data);
      setLoading(false); // Set loading to false when the data is fetched
      setRefreshing(false); // Set refreshing to false after the data is fetched
    } catch (error) {
      console.log('Error fetching services:', error);
      setLoading(false); // Set loading to false even if there's an error
      setRefreshing(false); // Set refreshing to false if there's an error
    }
  };

  const Service = ({ item }) => {
    // ... (Service component remains the same)
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
      ) : services.length > 0 ? (
        // Show service list when the data is loaded and there are services
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
      ) : (
        // Show the sad emoticon and message when there are no services
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <MaterialCommunityIcons
            name="emoticon-sad-outline"
            size={100}
            color={theme.PRIMARY_TEXT_COLOR}
          />
          <MediumText style={styles.text(theme)}>
            You don't have any Settled Services
          </MediumText>
        </View>
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