import { View } from "react-native";
import useTheme from "@src/hooks/useAppTheme";
import { Ionicons } from "@expo/vector-icons";
import { MediumText, LargeText } from "@src/components/AppText";

export default Bio = ({description, 
  coordinate,
  providerType,
  created_at,
ratingScore}) => {
  const { theme } = useTheme();

  return (
    <>
      <View style={{ marginTop: 10 }}>
        {/* <LargeText style={{ marginBottom: 2 }}>Bio</LargeText> */}
        <MediumText>
         {description}
        </MediumText>
      </View>

      <View
        style={{
          marginTop: 15,
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons
            name="location-outline"
            size={15}
            color={theme.PRIMARY_TEXT_COLORs}
          />
          <MediumText style={{ marginLeft: 3.5 }}>{coordinate}</MediumText>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons
            name="person-outline"
            size={15}
            color={theme.PRIMARY_TEXT_COLORs}
          />
          <MediumText style={{ marginLeft: 3.5 }}>{providerType}</MediumText>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons
            name="calendar-outline"
            size={15}
            color={theme.PRIMARY_TEXT_COLORs}
          />
          <MediumText style={{ marginLeft: 3.5 }}>Joined {created_at}</MediumText>
        </View>
      </View>

      <View
        style={{
          marginTop: 10,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <MediumText
          style={{
            color: theme.PRIMARY_TEXT_COLOR,
            // fontFamily: "FONT_SEMI_BOLD",
          }}
        >
          27
        </MediumText>
        <MediumText style={{ marginLeft: 3.5 }}>Completed Services</MediumText>
      </View>
    </>
  );
};
