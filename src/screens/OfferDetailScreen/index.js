import { useRef } from "react";
import { View, Image, Animated, StyleSheet } from "react-native";
import { AppScrollView, AppSafeAreaView } from "@src/components/AppViews";
import { MediumText, LargeText, XtraLargeText } from "@src/components/AppText";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import AppButton from "@src/components/AppButton";
import useTheme from "@src/hooks/useAppTheme";

export default OfferDetailScreen = () => {
  const { theme } = useTheme();
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
              source={require("@src/assets/images/lady.jpg")}
              style={styles.img(IMG_SIZE)}
            />
          </Animated.View>
        </View>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <XtraLargeText>
            Helen Njokwu{" "}
            <MaterialIcons name="verified" size={24} color={"green"} />
          </XtraLargeText>
          <MediumText>Service Receiver</MediumText>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
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
              size={20}
              color={theme.PRIMARY_TEXT_COLOR}
            />
            <MediumText style={{ marginLeft: 3.5 }}>Ikeja, Lagos</MediumText>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons
              name="time-outline"
              size={20}
              color={theme.PRIMARY_TEXT_COLOR}
            />
            <MediumText style={{ marginLeft: 3.5 }}>45min ago</MediumText>
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <LargeText>Category</LargeText>
          <MediumText>Beauty - Make up</MediumText>
        </View>
        <View style={{ marginTop: 20 }}>
          <LargeText>Budget</LargeText>
          <MediumText>₦40,000</MediumText>
        </View>
        <View style={{ marginTop: 20 }}>
          <LargeText>Description</LargeText>
          <MediumText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </MediumText>
        </View>
        <View style={{ marginTop: 20 }}>
          <LargeText>Attached Files</LargeText>
          <MediumText>No attached files</MediumText>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginBottom: 15,
          }}
        >
          <AppButton
            label="Decline"
            background="transparent"
            marginTop={20}
            buttonHeight={45}
          />
          <View style={{ width: 20 }} />
          <AppButton label="Accept" marginTop={20} buttonHeight={45} />
        </View>
      </AppScrollView>
    </AppSafeAreaView>
  );
};

const styles = StyleSheet.create({
  imgContainer: (imgSize, IMG_SIZE, scrollY) => ({
    height: imgSize,
    width: imgSize,
    marginTop: scrollY.interpolate({
      inputRange: [0, 100],
      outputRange: [0, IMG_SIZE / 2],
      extrapolate: "clamp",
    }),
  }),
  img: (IMG_SIZE) => ({
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    borderRadius: IMG_SIZE / 2,
  }),
});
