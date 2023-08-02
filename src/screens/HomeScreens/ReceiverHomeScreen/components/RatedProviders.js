import React, { useEffect, useState } from "react";
import { Image, View, FlatList, useWindowDimensions } from "react-native";
import { LargeText, SmallText, MediumText } from "@src/components/AppText";
import AppButton from "@src/components/AppButton";
import { SIZES } from "@src/constants/theme";
import useTheme from "@src/hooks/useAppTheme";
import { Ionicons } from "@expo/vector-icons";
import { AppSectionView } from "@src/components/AppViews";
import providers from "../constants/providers";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const StarRating = ({ rating, size, color, style }) => {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Render full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Ionicons
          key={i}
          name="star"
          size={size}
          color={color}
          style={{ marginRight: 2, fontSize: size }}
        />
      );
    }

    // Render half star if applicable
    if (hasHalfStar) {
      stars.push(
        <Ionicons
          key={fullStars}
          name="star-half"
          size={size}
          color={color}
          style={{ marginRight: 2 }}
        />
      );
    }

    // Render empty stars
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Ionicons
          key={fullStars + i + 1}
          name="star-outline"
          size={size}
          color={color}
          style={{ marginRight: 2 }}
        />
      );
    }

    return stars;
  };

  return <View style={[{ flexDirection: "row" }, style]}>{renderStars()}</View>;
};

const RatedProviders = () => {
  const { width, height } = useWindowDimensions();
  const { theme } = useTheme();
  const navigation = useNavigation();
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    fetchProviders();
  }, []);

  const fetchProviders = async () => {
    try {
      const response = await axios.get(
        "https://api.decmark.com/v1/user/providers/most_rated"
      );
      const data = response.data.data;
      console.log(data);
      setProviders(data);
    } catch (error) {
      console.log("Error fetching providers:", error);
    }
  };

  const ProviderSlide = ({ item }) => {
    const {
      id,
      title,
      price,
      description,
      location,
      type,
      coordinate,
      provider,
      providerType,
      created_at,
      ratings,
      user_id
    } = item;

    const ratingScore = ratings.length > 0 ? ratings[0].score : 0;
    const ratingReviews = ratings.length > 0 ? ratings[0].review : 'No reviews yet';

    return (
      <View
        style={{
          width: width - 50,
          marginBottom: 15,
          borderWidth: 1,
          borderRadius: SIZES.radius,
          borderColor: theme.PRIMARY_BORDER_COLOR,
          padding: 10,
          color: "black",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.1,
          shadowRadius: 1,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("@src/assets/images/black.png")}
            style={{
              width: "30%",
              height: "100%",
              borderTopLeftRadius: SIZES.radius,
              borderTopRightRadius: SIZES.radius,
              resizeMode: "contain",
            }}
          />
          <View style={{ flex: 1 }}>
            <MediumText
              numberOfLines={1}
              style={{
                color: theme.PRIMARY_TEXT_COLOR,
                flexShrink: 1,
              }}
            >
              {provider.name}
            </MediumText>
            <MediumText>{type}</MediumText>
            <StarRating
              rating={ratingScore}
              size={20}
              color="gold"
              style={{ marginTop: 5 }}
            />
          </View>

          <View>
            <MediumText
              style={{
                color: theme.PRIMARY_TEXT_COLOR,
              }}
            >
              ₦{price}
            </MediumText>
          </View>
        </View>

        <View style={{ padding: 5, flex: 1 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: 10,
            }}
          ></View>
          <SmallText>{description}</SmallText>
          <SmallText>{id}</SmallText>
          <SmallText>{user_id}</SmallText>
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
              <Ionicons
                name="location-outline"
                size={20}
                color={theme.gold}
              />
              <SmallText
                numberOfLines={1}
                style={{
                  color: theme.PRIMARY_TEXT_COLOR,
                  marginLeft: 1,
                }}
              >
                {coordinate}
                {ratingScore}
              </SmallText>
            </View>
            <AppButton
              label="Hire"
              marginTop={0.5}
              buttonHeight={40}
              onPress={() =>
                navigation.navigate("ProfileStack", {
                  screen: "ProviderProfileScreen",
                  params: {
                    id: id,
                    user_id:user_id,
                    price:price,
                    name: provider.name,
                    description: description,
                    type: type,
                    coordinate: coordinate,
                    providerType: providerType,
                    created_at: created_at,
                    ratingScore: ratingScore,
                    ratingReviews: ratingReviews,
                  }
                })
              }
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <AppSectionView>
      <LargeText style={{ paddingHorizontal: 20, fontSize: 20 }}>
        Most Rated Providers
      </LargeText>
      <FlatList
        data={providers}
        vertical
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ marginVertical: 10, paddingHorizontal: 20 }}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <ProviderSlide item={item} />}
      />
    </AppSectionView>
  );
};

export default RatedProviders;
