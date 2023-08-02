import { View, FlatList,Text,StyleSheet,Image,TouchableOpacity } from "react-native";
import { SmallText, MediumText } from "@src/components/AppText";
import AppButton from "@src/components/AppButton";
import { SIZES } from "@src/constants/theme";
import useTheme from "@src/hooks/useAppTheme";

import { useNavigation } from "@react-navigation/native";
import {
    Ionicons,
    EvilIcons,
    MaterialCommunityIcons,
  } from "@expo/vector-icons";
// import { TouchableOpacity } from "@gorhom/bottom-sheet";

export default Tasks = () => {
  const { theme } = useTheme();
  const navigation = useNavigation();

  const Tasks = [
    {
      name: "Make-Up Artist for mini get together",
      category: "Health",
      price: "40,500",
      description:
        "Hi abed! I am looking for a home massage, will you be available on Saturday by 6pm? 😉",
      time: "45 mins ago",
      location: "Ogba, Lagos",
    },
    {
      name: "Make-Up Artist for mini get together",
      category: "Health",
      price: "40,500",
      description:
        "Hi abed! I am looking for a home massage, will you be available on Saturday by 6pm? 😉",
      time: "45 mins ago",
      location: "Ogba, Lagos",
    },
    {
      name: "Make-Up Artist for mini get together",
      category: "Health",
      price: "40,500",
      description:
        "Hi abed! I am looking for a home massage, will you be available on Saturday by 6pm? 😉",
      time: "45 mins ago",
      location: "Ogba, Lagos",
    },
    {
      name: "Make-Up Artist for mini get together",
      category: "Health",
      price: "40,500",
      description:
        "Hi abed! I am looking for a home massage, will you be available on Saturday by 6pm? 😉",
      time: "45 mins ago",
      location: "Ogba, Lagos",
    },
    {
      name: "Make-Up Artist for mini get together",
      category: "Health",
      price: "40,500",
      description:
        "Hi abed! I am looking for a home massage, will you be available on Saturday by 6pm? 😉",
      time: "45 mins ago",
      location: "Ogba, Lagos",
    },
  ];

  const Task = ({ item }) => {
    return (
        <TouchableOpacity
        onPress={() =>
          navigation.navigate("ProfileStack", {
            screen: "JobDetails",
          })
        }
        >
              <View
        style={{
          backgroundColor: "transparent",
          width: "100%",
          marginBottom: 10,
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
              <MediumText
              style={{
                color: theme.PRIMARY_TEXT_COLOR,
                // fontFamily: "FONT_SEMI_BOLD",
              }}
              >₦{item.price}</MediumText>
            </View>
            <View>
            <Ionicons
            name="ellipsis-horizontal-outline"
            size={26}
            color={theme.PRIMARY_TEXT_COLOR}
          />
            </View>
          </View>
          {/* <SmallText>{item.description}</SmallText> */}

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 15,
            }}
          >
            <Ionicons name="time-outline" size={20} color={theme.gold} />
            <SmallText
              numberOfLines={1}
              style={{
                color: theme.PRIMARY_TEXT_COLOR,
                marginLeft: 1,
              }}
            >
              {item.time}
            </SmallText>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 15,
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

          <View
            style={{
              flexDirection: "row",
              marginTop: 15,
            }}
          >
            {/* <AppButton
              label="Review & Accept Offer"
              marginTop={0.5}
              buttonHeight={45}
              onPress={() =>
                navigation.navigate("ServiceStack", {
                  screen: "OfferDetailScreen",
                })
              }
            /> */}
          </View>
        </View>
      </View>
        </TouchableOpacity>
      
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={Tasks}
        bounces={false}
        contentContainerStyle={{ marginTop: 15, paddingHorizontal: 20,paddingVertical:30 }}
        keyExtractor={(_, i) => i}
        renderItem={({ item }) => <Task item={item} />}
        onPress={() =>
        navigation.navigate("ProfileStack", {
          screen: "Referral",
        })
      }
      />
        
      <View style={styles.ReferBtn}>
      <TouchableOpacity 
      onPress={() =>
        navigation.navigate("ProfileStack", {
          screen: "Referral",
        })
      }
      >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={require('@src/assets/images/wingedMoney.png')}
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 25,
                  borderWidth: 1,
                }}
              />
              <Text style={{ marginLeft: 10 }}>
                Refer Your Friends & Earn Forever
              </Text>
              <EvilIcons
                name="chevron-right"
                size={25}
                color={theme.SECONDARY_TEXT_COLOR}
              />
            </View>
      </TouchableOpacity>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ReferBtn: {
    position: 'relative',
    bottom: 20,
    left: 15,
    // right: 20,
    height: 60,
    width:'90%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1E4D2',
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
