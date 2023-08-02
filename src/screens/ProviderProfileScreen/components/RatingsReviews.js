import { View, TouchableOpacity } from "react-native";
import useTheme from "@src/hooks/useAppTheme";
import { Ionicons } from "@expo/vector-icons";
import {
  MediumText,
  LargeText,
  XtraLargeText,
  SmallText,
} from "@src/components/AppText";

export default RatingsReviews = ({
  ratingScore,
  ratingReviews
}) => {
  const { theme } = useTheme();

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(ratingScore);

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Ionicons key={i} name="star" size={12} color={theme.gold} />
      );
    }

    return stars;
  };

  return (
    <View style={{ marginTop: 20 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 5,
        }}
      >
        <LargeText>Ratings and reviews</LargeText>
        <TouchableOpacity
          style={{
            borderRadius: 50,
            alignSelf: "flex-start",
            padding: 10,
            paddingVertical: 7.5,
            borderWidth: 1,
            borderColor: theme.PRIMARY_BORDER_COLOR,
          }}
        >
          <SmallText style={{ color: theme.PRIMARY_TEXT_COLOR }}>
            See All (17)
          </SmallText>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View style={{ paddingRight: 10 }}>
          <XtraLargeText>{ratingScore}</XtraLargeText>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            {renderStars()}
          </View>
          <MediumText>25 ratings</MediumText>
        </View>

        <View
          style={{
            flex: 1,
            borderLeftWidth: 1,
            borderLeftColor: theme.PRIMARY_BORDER_COLOR,
            paddingLeft: 10,
          }}
        >
          <MediumText style={{ color: theme.PRIMARY_TEXT_COLOR }}>
            Demo User
          </MediumText>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 5,
            }}
          >
            <View
              style={{
                flexDirection: "row",
              }}
            >
              {renderStars()}
            </View>
            <SmallText style={{ marginLeft: 3.5 }}>05-07-2022</SmallText>
          </View>
          <MediumText>
            {ratingReviews}
          </MediumText>
        </View>
      </View>
    </View>
  );
};
