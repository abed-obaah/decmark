import { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  useWindowDimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { AppSafeAreaView, AppScrollView } from "@src/components/AppViews";
import { SIZES } from "@src/constants/theme";
import useTheme from "@src/hooks/useAppTheme";
import { SmallText, MediumText } from "@src/components/AppText";
import { Ionicons } from "@expo/vector-icons";

export default AvailableServiceScreen = ({ navigation, route }) => {
  const { service } = route.params;
  const { theme } = useTheme();
  const { width } = useWindowDimensions();

  const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [searchText, setSearchText] = useState(service.toLowerCase());
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => null,
      headerTitleAlign: "center",
      headerTitle: () => (
        <TextInput
          onChangeText={(value) => setSearchText(value)}
          defaultValue={searchText}
          returnKeyType="search"
          selectionColor={theme.gold}
          style={{
            flex: 1,
            width: width - 110,
            fontSize: SIZES.md,
            fontFamily: "SourceSansPro-SemiBold",
            color: theme.PRIMARY_TEXT_COLOR,
            textAlign: "center",
          }}
          onBlur={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
        />
      ),
      headerRight: () => (
        <TouchableOpacity
          style={{
            paddingRight: 15,
          }}
        >
          <Ionicons
            name={isFocused ? "close" : "search"}
            size={24}
            color={theme.SECONDARY_TEXT_COLOR}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation, isFocused]);

  return (
    <AppSafeAreaView>
      {/* <View style={{ flex: 1, paddingLeft: 20 }}>
        <View
          style={{
            padding: 10,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: theme.PRIMARY_BORDER_COLOR,
            marginHorizontal: 15
          }}
        >
          <MediumText>Ikeja, Lagos</MediumText>
        </View>
      </View> */}
      <AppScrollView>
        {data.map((item) => (
          <TouchableOpacity
            key={item}
            style={{
              flexDirection: "row",
              marginTop: 20,
            }}
            onPress={() =>
              navigation.navigate("ProfileStack", {
                screen: "ProviderProfileScreen",
              })
            }
          >
            <Image
              source={require("@src/assets/images/black.png")}
              style={{
                height: 65,
                width: 65,
                resizeMode: "cover",
                borderRadius: 10,
              }}
            />
            <View
              style={{
                marginLeft: 10,
                justifyContent: "center",
              }}
            >
              <MediumText style={{ color: theme.PRIMARY_TEXT_COLOR }}>
               names
              </MediumText>
              <MediumText>
                <Text style={{ color: theme.PRIMARY_TEXT_COLOR }}>Beauty</Text>{" "}
                ▪ General
              </MediumText>
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 2.5,
                  alignItems: "center",
                }}
              >
                <Ionicons name="star" size={12} color={theme.gold} />
                <SmallText style={{ marginLeft: 5 }}>4.5</SmallText>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </AppScrollView>
    </AppSafeAreaView>
  );
};
