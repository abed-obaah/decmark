import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  Keyboard,
  TextInput,
  StyleSheet,
  Alert
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { AppSectionView } from "../../../../components/AppViews";
import { LargeText, SmallText } from "../../../../components/AppText";
import AppSearchInput from "../../../../components/AppSearchInput";
import useTheme from "@src/hooks/useAppTheme";
import { search } from "@src/redux/searchSlice";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";

const CategorySection = ({ item }) => {
  const navigation = useNavigation();
  const { theme } = useTheme();
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState(""); // Corrected variable name
  const [searchResults, setSearchResults] = useState([]); // Added state for search results

  useEffect(() => {
    console.log("Query:", searchQuery); // Corrected variable name
  }, [searchQuery]); // Corrected variable name

  const handleSearch = async () => {
    Keyboard.dismiss();
    console.log(searchQuery); // Corrected variable name
    try {
      const response = await axios.get(
        `https://api.decmark.com/v1/user/services/search?search=${searchQuery}` // Corrected variable name
      );
      const data = response.data;
      console.log(data);
      setSearchResults(data); // Store the search results in state
    } catch (error) {
      console.log("error fetching search:", error);
      setSearchResults([]); // Reset search results on error
    }
  };

  const categories = [
    {
      name: "General",
      Path: "GeneralScreen",
    },
    {
      name: "Errand",
      Path: "ErrandScreen",
    },
    {
      name: "Courier",
      Path: "CourierScreen",
    },
    {
      name: "Ride-Hailing",
      Path: "RideMapScreen",
    },
  ];

  const navigateToScreen = (screenName) => {
    if (screenName === "RideMapScreen") {
      navigation.navigate("ProfileStack", { screen: "RideMapScreen" });
    } else if (screenName === "CourierScreen") {
      navigation.navigate("ProfileStack", { screen: "CourierScreen" });
    } else if (screenName === "ErrandScreen") {
      navigation.navigate("ProfileStack", { screen: "ErrandScreen" });
    } else {
      navigation.navigate(screenName);
    }
  };

  // const navigateToScreen = (path) => {
  //   // Implement your navigation logic here based on the 'path'
  //   // For example: navigation.navigate(path);
  // };

  // const handleItemPress = (itemId) => {
  //   // Show an alert with the item's ID when pressed
  //   Alert.alert('Item ID', `You pressed item with ID: ${itemId}`);
  // };

  return (
    <AppSectionView>
      <View style={{ paddingHorizontal: 20 }}>
        <LargeText style={{ marginBottom: 10 }}>
          Hi, {userInfo?.data?.first_name} 👋
        </LargeText>
        <View style={styles.inputContainer}>
          <TextInput
            value={searchQuery} // Corrected variable name
            placeholder="Search for a service"
            autoCorrect={false}
            clearButtonMode="always"
            onChangeText={(query) => setSearchQuery(query)} // Corrected variable name
            placeholderTextColor={theme.SECONDARY_TEXT_COLOR}
            style={{
              flex: 1,
              height: "100%",
              fontSize: 16,
              color: theme.PRIMARY_TEXT_COLOR,
              fontFamily: "SourceSansPro-Regular",
            }}
          />
          <TouchableOpacity
            onPress={handleSearch}
            style={{
              backgroundColor: theme.gold,
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
              width: 40,
              height: 40,
              marginLeft: 8,
            }}
          >
            <Ionicons name="search-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>

        {/* Dropdown to display search results */}
        {searchResults.length > 0 && (
          <View style={styles.dropdownContainer}>
          <FlatList
            data={searchResults}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("ProfileStack", {
                    screen: "ProviderProfileScreen",
                    params: {
                      id: searchResults.id,
                      price: item.price,
                      name: item.title, // Using 'title' instead of 'name' as per the provided data
                      description: item.description,
                      type: item.type,
                      coordinate: item.coordinate,
                      providerType: item.category, // Using 'category' instead of 'providerType' as per the provided data
                      created_at: item.created_at,
                      ratingScore: item.ratingScore,
                      ratingReviews: item.ratingReviews,
                    },
                  });
                }}
                key={item.id}
              >
                <View
                  style={{
                    // Customize the dropdown item view as per your UI requirements
                    backgroundColor: theme.INPUT_BACKGROUND_COLOR,
                    padding: 10,
                    paddingHorizontal: 16,
                    marginVertical: 5,
                    borderWidth: 1,
                    borderRadius: 8,
                    borderColor: theme.PRIMARY_BORDER_COLOR,
                  }}
                >
                  <SmallText style={{ color: theme.PRIMARY_TEXT_COLOR }}>
                    Category: {item.category}
                  </SmallText>
                  <SmallText style={{ color: theme.PRIMARY_TEXT_COLOR }}>
                    Title: {item.title}
                  </SmallText>
                  <SmallText style={{ color: theme.PRIMARY_TEXT_COLOR }}>
                    Type: {item.type}
                  </SmallText>
                  <SmallText style={{ color: theme.PRIMARY_TEXT_COLOR }}>
                    Price: {item.price}
                  </SmallText>
                  <SmallText style={{ color: theme.PRIMARY_TEXT_COLOR }}>
                    Description: {item.description}
                  </SmallText>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
        )}

        {/* Rest of the code remains the same... */}
      </View>

      <FlatList
        data={categories}
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ marginTop: 10, paddingHorizontal: 20 }}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigateToScreen(item.Path)}
            key={item.name}
          >
            <View
              style={{
                backgroundColor: theme.INPUT_BACKGROUND_COLOR,
                padding: 10,
                paddingHorizontal: 16,
                marginRight: 10,
                borderWidth: 1,
                borderRadius: 50,
                borderColor: theme.PRIMARY_BORDER_COLOR,
              }}
            >
              <SmallText style={{ color: theme.PRIMARY_TEXT_COLOR }}>
                {item.name}
              </SmallText>
            </View>
          </TouchableOpacity>
        )}
      />
    </AppSectionView>
  );



  // return (
  //   <AppSectionView>
  //     <View style={{ paddingHorizontal: 20 }}>
  //       <LargeText style={{ marginBottom: 10 }}>
  //         Hi, {userInfo?.data?.first_name} 👋
  //       </LargeText>
  //       <View style={styles.inputContainer}>
  //         <TextInput
  //             value={searchQuery} // Corrected variable name
  //             placeholder="Search for a service"
  //             autoCorrect={false}
  //             clearButtonMode="always"
  //             onChangeText={(query) => setSearchQuery(query)} // Corrected variable name
  //             placeholderTextColor={theme.SECONDARY_TEXT_COLOR}
  //             style={{
  //               flex: 1,
  //               height: "100%",
  //               fontSize: 16,
  //               color: theme.PRIMARY_TEXT_COLOR,
  //               fontFamily: "SourceSansPro-Regular",
  //             }}
  //           />
  //            <TouchableOpacity
  //           onPress={handleSearch}
  //           style={{
  //             backgroundColor: theme.gold,
  //             borderRadius: 50,
  //             justifyContent: "center",
  //             alignItems: "center",
  //             width: 40,
  //             height: 40,
  //             marginLeft: 8,
  //           }}
  //         >
  //           <Ionicons name="search-outline" size={24} color="black" />
  //         </TouchableOpacity>
  //       </View>

  //       {/* Dropdown to display search results */}
  //       {searchResults.length > 0 && ( // Conditionally render the dropdown only when there are search results
  //         <View style={styles.dropdownContainer}>
  //           <FlatList
  //             data={searchResults}
  //             keyExtractor={(item) => item.id.toString()}
  //             renderItem={({ item }) => (
  //               <TouchableOpacity
  //                 onPress={() => {
  //                   // ... (existing navigation logic)
  //                 }}
  //                 key={item.id}
  //               >
  //                 <View
  //                   style={{
  //                     // ... (existing styling for dropdown item view)
  //                   }}
  //                 >
  //                   {/* ... (existing content of dropdown item view) ... */}
  //                 </View>
  //               </TouchableOpacity>
  //             )}
  //           />
  //         </View>
  //       )}

  //       {/* Rest of the code remains the same... */}
  //     </View>

  //     {/* Rest of the code remains the same... */}
  //   </AppSectionView>
  // );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 8,
  },
  // dropdownContainer: {
  //   maxHeight: 200, // Set a maximum height for the dropdown
  //   marginTop: 10,
  //   paddingHorizontal: 20,
  //   backgroundColor: "white", // Customize the background color as needed
  //   borderColor: "gray", // Customize the border color as needed
  //   borderWidth: 1,
  //   borderRadius: 8,
  //   elevation: 2, // Add elevation for a subtle shadow effect (Android-specific)
  // },
});

export default CategorySection;
