import { View, Image, StyleSheet,FlatList} from "react-native";
import { SmallText, MediumText,LargeText } from "@src/components/AppText";
import AppButton from "@src/components/AppButton";
import { SIZES } from "@src/constants/theme";
import useTheme from "@src/hooks/useAppTheme";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AppSafeAreaView, AppScrollView } from "@src/components/AppViews";


export default function LinkedScreen() {
  const { theme } = useTheme();
  const navigation = useNavigation();

  const services = [
    {
      name: "Dominic praise",
      category: "Beauty",
      price: "40,500",
      description:
        "Hi there! I can perform your cleaning services for you at a fast work rate.",
      location: "Ogba, Lagos",
    },
  ];

  const LinkedItem = ({ item }) => {
    return (

        <AppSafeAreaView>
            {/* <AppScrollView> */}
                <View style={styles.container}>
                    <Image
                        source={require("../../../../../assets/images/welldone.png")}
                        style={styles.image} />
                    <LargeText style={styles.largeText}>All Done!</LargeText>
                    <MediumText style={styles.mediumText}>
                        You have been linked to a nearby Service provider Contact Below
                        {/* {user.username} */}
                    </MediumText>
                    
                </View>
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
                                        {item.name}
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
                                <AppButton
                                    label="Message"
                                    marginTop={0.5}
                                    buttonHeight={40} />
                            </View>
                        </View>
                    </View>
            {/* </AppScrollView> */}
        </AppSafeAreaView>
    );
  };

  return (
    <AppSafeAreaView>
    <FlatList
      data={services}
      bounces={false}
      contentContainerStyle={{ marginVertical: 15, paddingHorizontal: 20 }}
      keyExtractor={(_, i) => i.toString()}
      renderItem={({ item }) => <LinkedItem item={item} />}
    />
    
    </AppSafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
    },
    image: {
      width: 200,
      height: 200,
      resizeMode: "contain",
    },
    largeText: {
      fontSize: 24,
      marginTop: 20,
    },
    mediumText: {
      fontSize: 18,
      marginTop: 10,
    },
    buttonContainer: {
      marginTop: 20,
      width: "100%",
      alignItems: "center",
    },
    button: {
      width: "70%", // Adjust the width as per your requirements
    },
  });
