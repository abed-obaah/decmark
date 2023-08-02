import { useState, useEffect } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { AppSafeAreaView, AppSectionView } from "@src/components/AppViews";
import SwitchModeInfo from "../components/SwitchModeInfo";
import useSwitchUserMode from "@src/hooks/useSwitchUserMode";
import { LargeText, MediumText } from "@src/components/AppText";
import useTheme from "@src/hooks/useAppTheme";
import { FontAwesome } from "@expo/vector-icons";
import GroupTab from "@src/components/GroupTab";
import MyServices from "./components/MyServices";
import Offers from "./components/Offers";

export default ProviderHomeScreen = ({ navigation }) => {
  const { theme } = useTheme();
  const { isModeSwitch } = useSwitchUserMode();

  const [activeTab, setActiveTab] = useState(1);
  const [offersCount, setOffersCount] = useState(0);

  const tabs = {
    0: <Offers />,
    1: <MyServices />,
    2: <Offers />,
  };

  useEffect(() => {
    // Fetch the offers count from the server or any other data source
    // and update the offersCount state
    fetchOffersCount();
  }, []);

  const fetchOffersCount = async () => {
    try {
      // Replace this with your API call to get the offers count
      const response = await fetch("https://api.example.com/offers/count");
      const data = await response.json();

       // Update the offers count
      setOffersCount(data.count);

      console.log(data.count);
    } catch (error) {
      console.log("Error fetching offers count:", error);
    }
  };

  return (
    <>
      {isModeSwitch ? (
        <SwitchModeInfo />
      ) : (
        <AppSafeAreaView style={{ position: "relative" }}>
          <View style={{ flex: 1 }}>
            <AppSectionView style={{ paddingHorizontal: 20 }}>
              <LargeText>Hi, chi 👋</LargeText>
              <MediumText>Explore DecMark services</MediumText>
            </AppSectionView>
            <GroupTab
              tabs={["Trending", "Services", `Offers(${offersCount})`]}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />

            {tabs[activeTab]}
          </View>
          {activeTab === 1 && (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ServiceStack", {
                  screen: "AddServiceScreen",
                })
              }
              style={[
                styles.floatBtn,
                {
                  backgroundColor: theme.gold,
                  borderColor: theme.gold,
                },
              ]}
            >
              <FontAwesome name="plus" size={24} color={theme.dark} />
            </TouchableOpacity>
          )}
        </AppSafeAreaView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  floatBtn: {
    position: "absolute",
    bottom: 20,
    right: 20,
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 50,
  },
});
