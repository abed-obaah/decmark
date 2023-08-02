import { Dimensions, StyleSheet } from 'react-native';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { LargeText, MediumText } from "@src/components/AppText";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  whereContainer: {
    marginBottom: 12,
  },
  whereTo: {
    fontSize: windowWidth > 360 ? 18 : 16,
  },
  RiderLocate: {
    marginLeft: 12,
    marginBottom: 12,
  },
  schedule: {
    fontSize: windowWidth > 360 ? 16 : 14,
  },
  PaymentContainer: {
    marginBottom: 12,
  },
  PaymentMethod: {
    fontSize: windowWidth > 360 ? 16 : 14,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    marginHorizontal: 8,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    fontSize: windowWidth > 360 ? 18 : 16,
    color: '#fff',
  },
});

export default function Widget() {
  return (
    <View style={styles.container}>
      <View style={styles.whereContainer}>
        <Text style={styles.whereTo}>Brooklyn Simmons</Text>
        <View style={[styles.RiderLocate, { flexDirection: 'row', alignItems: 'center' }]}>
          <Ionicons name="bicycle-outline" size={windowWidth > 360 ? 13 : 11} color="gold" />
          <Text style={styles.schedule}>Executive</Text>
        </View>
      </View>

      <View style={[styles.RiderLocate, { flexDirection: 'row', alignItems: 'center' }]}>
        <Ionicons name="locate-outline" size={windowWidth > 360 ? 24 : 20} color="green" />
        <Text>Rider location goes here</Text>
      </View>
      <View style={[styles.RiderLocate, { flexDirection: 'row', alignItems: 'center' }]}>
        <Ionicons name="location-outline" size={windowWidth > 360 ? 24 : 20} color="red" />
        <Text>User destination goes here</Text>
      </View>

      <View style={styles.PaymentContainer}>
        <Text style={styles.PaymentMethod}>Payment Method: Cash</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, { backgroundColor: 'green' }]}>
          <LargeText style={styles.buttonText}>Confirm</LargeText>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: 'red' }]}>
          <LargeText style={styles.buttonText}>Decline</LargeText>
        </TouchableOpacity>
      </View>
    </View>
  );
}
