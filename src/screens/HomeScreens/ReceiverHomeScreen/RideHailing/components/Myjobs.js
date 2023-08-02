import React from "react";
import { View, FlatList } from "react-native";
import { SmallText, MediumText } from "@src/components/AppText";
import AppButton from "@src/components/AppButton";
import { SIZES } from "@src/constants/theme";
import useTheme from "@src/hooks/useAppTheme";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default Myjobs = () => {
  const { theme } = useTheme();
  const navigation = useNavigation();

  const services = [
    {
      title: "Make-up Artist",
      category: "Beauty",
      price: "40,500",
      description:
        "Hi there! I can perform your cleaning services for you at a fast work rate.",
      location: "Ogba, Lagos",
    },
    {
      title: "HairDresser",
      category: "Beauty",
      price: "40,500",
      description:
        "Hi there! I can perform your cleaning services for you at a fast work rate.",
      location: "Ogba, Lagos",
    },
  ];

  const Jobs = ({ item }) => {
    const buttonText = item.status === "pending" ? "Pending" : "Waiting";
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
                {item.title}
              </MediumText>
              <MediumText>{item.category}</MediumText>
            </View>
            <View>
              <MediumText
                style={{
                  color: theme.PRIMARY_TEXT_COLOR,
                  // fontFamily: "FONT_SEMI_BOLD",
                }}
              >
                ₦{item.price}
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
          <SmallText>{item.description}</SmallText>
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
              <SmallText
                numberOfLines={1}
                style={{
                  color: theme.PRIMARY_TEXT_COLOR,
                  marginLeft: 1,
                }}
              >
                {item.location}
              </SmallText>
            </View>
            {/* <AppButton
              label="Pending" // Display "Pending" text
              marginTop={0.5}
              buttonHeight={40}
              // onPress={() => navigation.navigate('ProfileStack', { screen: 'ProviderProfileScreen' })}
            /> */}
           <AppButton
            label={buttonText} // Display "Pending" or "Waiting" text based on item status
            marginTop={0.5}
            buttonHeight={40}
            // onPress={() => navigation.navigate('ProfileStack', { screen: 'ProviderProfileScreen' })}
          />
          </View>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={services}
      bounces={false}
      contentContainerStyle={{ marginVertical: 15, paddingHorizontal: 20 }}
      keyExtractor={(_, i) => i}
      renderItem={({ item }) => <Jobs item={item} />}
    />
  );
};
