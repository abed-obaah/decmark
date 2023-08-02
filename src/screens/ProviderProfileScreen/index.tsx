import { useRef, FC } from "react";
import { View, Image, Modal, Animated, StyleSheet,Text, TouchableOpacity } from "react-native";
import { AppScrollView, AppSafeAreaView } from "@src/components/AppViews";
import { MaterialIcons } from "@expo/vector-icons";
import { MediumText, XtraLargeText } from "@src/components/AppText";
import AppButton from "@src/components/AppButton";
import WorkImages from "./components/WorkImages";
import RatingsReviews from "./components/RatingsReviews";
import Bio from "./components/Bio";
import AppBottomSheet from "@src/components/ui/BottomSheet";
import useBottomSheet from "@src/hooks/useBottomSheet";
import { useNavigation } from "@react-navigation/native";
import AppInput from "@src/components/AppInput";
import { useRoute } from "@react-navigation/native";
import axios from "axios";

const ProviderProfileScreen = () => {
  const route = useRoute();
  const { 
    id, 
    name, 
    description, 
    type, 
    coordinate,
    providerType,
    created_at,
    ratingScore,
    ratingReviews,
    user_id,
    price} = route.params;
  const navigation = useNavigation();
  const { sheetRef, handleSnapPress } = useBottomSheet();
  const scrollY = useRef(new Animated.Value(0)).current;
  const IMG_SIZE = 200;
  const imgSize = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [IMG_SIZE, IMG_SIZE / 2],
    extrapolate: "clamp",
  });

 

  return (
    <AppSafeAreaView>
      <AppScrollView
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: { y: scrollY },
              },
            },
          ],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        <View style={{ alignItems: "center" }}>
          <Animated.View
            style={styles.imgContainer(imgSize, IMG_SIZE, scrollY)}
          >
            <Image
              source={require("@src/assets/images/black.png")}
              style={styles.img(IMG_SIZE) as any}
            />
          </Animated.View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <XtraLargeText>
            <Image
              source={require("@src/assets/images/black.png")}
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
                borderWidth: 26,
                borderColor: "black",
              }}
            />
            {name}{" "}
            <MaterialIcons name="verified" size={24} color={"green"} />
          </XtraLargeText>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AppButton
              style={{
                backgroundColor: "#DEB253",
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderRadius: 5,
                marginTop: 30,
              }}
              label="Schedule"
              onPress={() =>
                navigation.navigate("ProfileStack", {
                  screen: "ScheduleScreen",
                  params: {
                    id: id,
                    price:price,
                    user_id:user_id,
                  },
                })
              }
            />
          </View>
        </View>
        <MediumText style={{ marginLeft: 12 }}>General Services &bull;{type}</MediumText>
        <Bio 
          description={description}
          coordinate={coordinate}
          providerType={providerType}
          created_at={created_at}
          
        />
        <RatingsReviews
        ratingScore={ratingScore}
        ratingReviews={ratingReviews}
        />
        <WorkImages />
      </AppScrollView>
    </AppSafeAreaView>
  );
};

export default ProviderProfileScreen;

const styles = StyleSheet.create({
  imgContainer: (imgSize: any, IMG_SIZE: any, scrollY: any) => ({
    height: imgSize,
    width: imgSize,
    marginTop: scrollY.interpolate({
      inputRange: [0, 100],
      outputRange: [0, IMG_SIZE / 2],
      extrapolate: "clamp",
    }),
  }),
  img: (IMG_SIZE: any) => ({
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    borderRadius: IMG_SIZE / 2,
  }),
});
