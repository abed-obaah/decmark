import React, { useState, useEffect } from "react";
import { View, StyleSheet, Button, Text, PermissionsAndroid,TouchableOpacity,Image } from "react-native";
import { AppSafeAreaView, AppScrollView } from "@src/components/AppViews";
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { Ionicons } from "@expo/vector-icons";
import { LargeText, MediumText } from "@src/components/AppText";
import Widget from "../screens/widget";

const RideMapScreen = () => {
  const [mapLayoutReady, setMapLayoutReady] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const [userAddress, setUserAddress] = useState(null);

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        getCurrentLocation();
      } else {
        console.log("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const getCurrentLocation = async () => {
    try {
      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      setUserLocation({ latitude, longitude });
      reverseGeocode(latitude, longitude);
    } catch (error) {
      console.warn("Error getting user location:", error);
    }
  };
      const reverseGeocode = async (latitude, longitude) => {
    try {
      const address = await Location.reverseGeocodeAsync({ latitude, longitude });
      console.log(address); // Log the address object to inspect its structure
  
      const streetNumber = address[0]?.streetNumber || "";
      const street = address[0]?.street || "";
      const city = address[0]?.city || "";
      const region = address[0]?.region || "";
      const postalCode = address[0]?.postalCode || "";
      const fullAddress = `${streetNumber} ${street}, ${city}, ${region} ${postalCode}`;
      setUserAddress(fullAddress);
    } catch (error) {
      console.warn("Error getting address:", error);
    }
  };
  

  const handleMapLayout = () => {
    setMapLayoutReady(true);
  };

  const handleRequestRide = () => {
    // Placeholder implementation for handling ride request
    alert("Ride requested");
  };
  const UserProfile = () => {
    // Placeholder implementation for handling ride request
    alert("user profile");
  };

  return (
    <AppSafeAreaView>
      <AppScrollView>
        <View style={styles.container} onLayout={handleMapLayout}>
          {mapLayoutReady ? (
            <>
              <View style={styles.TopWidget}>
                 <TouchableOpacity
                 onPress={handleRequestRide}>
                 <View style={styles.ScheduleContainer}>
                      <Ionicons name="today-outline" size={24} color="black" />
                        {/* <Text style={styles.whereTo}>Schedule trip?</Text> */}
                      </View>
                  </TouchableOpacity>
                
             </View>
              <MapView
                style={styles.map}
                initialRegion={{
                  latitude: userLocation ? userLocation.latitude : 0,
                  longitude: userLocation ? userLocation.longitude : 0,
                  latitudeDelta: 0.0,
                  longitudeDelta: 0.0,
                }}
                showsCompass={true}
                rotateEnabled={false}
                showsTraffic={true}
                showsUserLocation={true}
                showsMyLocationButton={true}
              >
                {userLocation && (
                  <Marker
                    coordinate={userLocation}
                    title="You are here"
                    description={userAddress}
                  />
                )}
              </MapView>
            </>
          ) : null}
           <View style={[styles.bottomWidget, { flexDirection: "row", alignItems:'center' }]}>
            <TouchableOpacity
            onPress={UserProfile}
            >
                 <Image source={require("../assets/images/welldone.png")} style={styles.image} />
            </TouchableOpacity>
               

               {/* <View>
                <View style={styles.whereContainer}>
                  <Text style={styles.whereTo}>Broklyn Simmons</Text>
                  <View style={[styles.RiderLocate, { flexDirection: "row", alignItems:'center' }]}>
                    <Ionicons name="bicycle-outline" size={13} color="gold" />
                    <Text style={styles.schedule}>Executive</Text>
                  </View>
               </View>

                        <View style={[styles.RiderLocate, { flexDirection: "row", alignItems:'center',marginLeft:12,marginBottom:12 }]}>
                          <Ionicons name="locate-outline" size={24} color="green" />
                          <Text>Rider location goes here</Text>
                        </View>
                        <View style={[{ flexDirection: "row",alignItems:'center',marginLeft:12,marginBottom:12 }]}>
                          <Ionicons name="location-outline" size={24} color="red" />
                          <Text>user destination goes here</Text>
                        </View>

                          <View style={styles.PaymentContainer}>
                            <Text style={styles.PaymentMethod}>Payment Method : Cash</Text>
                          </View>

                  <View style={styles.buttonContainer}>
                              <TouchableOpacity
                              style={[styles.button, { backgroundColor: "green" }]}
                              // onPress={handleConfirm}
                              >
                              <LargeText style={styles.buttonText}>Confirm</LargeText>
                              </TouchableOpacity>
                              <TouchableOpacity
                              style={[styles.button, { backgroundColor: "red" }]}
                              // onPress={handleDecline}
                              >
                              <LargeText style={styles.buttonText}>Decline</LargeText>
                              </TouchableOpacity>
                    </View>
               </View> */}

               <Widget/>
            
          </View>
        </View>
      </AppScrollView>
    </AppSafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 750, // Adjust the height as per your requirement
  },
  map: {
    flex: 1,
  },
  largeText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  TopWidget:{
    position:"absolute",
    top:0,
    marginLeft:0,
    zIndex:5, 
    // borderColor:
    backgroundColor:'transparent'
  },
  bottomWidget:{
    position:'absolute',
    bottom:0,
    // height:100,
    width:'95%',
    marginHorizontal:'2.5%',
    borderTopStartRadius:5,
    borderBottomEndRadius:3,
    backgroundColor:'#fff',
    zIndex:5,   
  },
  whereContainer:{
    margin:'2.5%',
    // backgroundColor:'#f1f1f1',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:4,
    alignContent:"center",
    paddingVertical:8,
    marginBottom:0,
  },
  PaymentContainer:{
    // margin:'2.5%',
    // backgroundColor:'#f1f1f1',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:4,
    alignContent:"center",
    paddingVertical:8,
    marginLeft:15,
  },
  ScheduleContainer:{
    // margin:'.5%',
    marginVertical:12,
    borderRadius:6,
    backgroundColor:'#f1f1f1',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:7,
    alignContent:"center",
    paddingVertical:8,
    marginBottom:20,

  },
  whereTo:{
    fontSize:20,
    color:"black",

  },
  buttonContainer: {
    flexDirection: "row",
  },
  // largeText: {
  //   fontSize: 24,
  //   marginTop: 20,
  // },
  button: {
    flex: 1,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  RiderLocate:{
    display: "flex"
  },
  image: {
    width: 100,
    height: 100,
    marginTop:-20,
    // resizeMode: "contain",
  },
});

export default RideMapScreen;
