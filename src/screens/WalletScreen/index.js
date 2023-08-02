import { useState } from "react";
import {
  View,
  TouchableOpacity,
  useWindowDimensions,
  StyleSheet,
} from "react-native";
import {
  AppRareScrollView,
  AppSafeAreaView,
  AppSectionView,
} from "@src/components/AppViews";
import useTheme from "@src/hooks/useAppTheme";
import { LargeText, MediumText, SmallText } from "@src/components/AppText";
import { Ionicons } from "@expo/vector-icons";

export default WalletScreen = ({ navigation }) => {
  const { theme } = useTheme();
  const [amountVisible, setAmountVisible] = useState(true);

  const { width } = useWindowDimensions();

  const options = [
    {
      icon: "card-outline",
      text: "Deposit",
      fun: () =>
        navigation.navigate("WalletStack", { screen: "FundWalletScreen" }),
    },
    {
      icon: "paper-plane",
      text: "Withdraw",
      fun: () => navigation.navigate("WalletStack", { screen: "WalletScreen" }),
    },
    {
      icon: "move",
      text: "Transfer",
    },
  ];

  return (
    <AppSafeAreaView>
      <AppRareScrollView>
        <AppSectionView style={{ paddingHorizontal: 20 }}>
          <View
            style={[
              styles.overview,
              {
                backgroundColor: theme.INPUT_BACKGROUND_COLOR,
                borderColor: theme.PRIMARY_BORDER_COLOR,
              },
            ]}
          >
            <View>
              <LargeText>
                ₦ {amountVisible ? "100,000.00" : "XXXXXX.XX"}
              </LargeText>
              <SmallText
                style={{ color: theme.PRIMARY_TEXT_COLOR, marginTop: 10 }}
              >
                Book Balance:
                <SmallText style={{ color: theme.GOLDEN_TEXT }}>
                  {" "}
                  ₦ {amountVisible ? "125,050.00" : "XXXXXX.XX"}
                </SmallText>
              </SmallText>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => setAmountVisible(!amountVisible)}
                style={{ paddingRight: 5 }}
              >
                <Ionicons
                  name={amountVisible ? "eye-off" : "eye"}
                  size={24}
                  color={theme.PRIMARY_TEXT_COLOR}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              paddingTop: 20,
            }}
          >
            {options.map((item, i) => (
              <TouchableOpacity
                onPress={item.fun}
                key={i}
                style={{
                  width: (width - 40) / options.length,
                  alignItems: "center",
                  borderRightWidth: 1,
                  borderRightColor:
                    i + 1 === options.length
                      ? "transparent"
                      : theme.PRIMARY_BORDER_COLOR,
                }}
              >
                <Ionicons
                  name={item.icon}
                  size={15}
                  color={theme.PRIMARY_TEXT_COLOR}
                />
                <SmallText style={{ color: theme.PRIMARY_TEXT_COLOR }}>
                  {item.text}
                </SmallText>
              </TouchableOpacity>
            ))}
          </View>
        </AppSectionView>
        <AppSectionView>
          <LargeText
            style={{
              paddingBottom: 10,
              paddingHorizontal: 20,
              borderBottomWidth: 1,
              borderBottomColor: theme.PRIMARY_BORDER_COLOR,
            }}
          >
            Transactions
          </LargeText>
          <View
            style={{
              height: 250,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MediumText>Oops!</MediumText>
            <MediumText>No transactions history</MediumText>
          </View>
        </AppSectionView>
      </AppRareScrollView>
    </AppSafeAreaView>
  );
};

const styles = StyleSheet.create({
  overview: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
  },
});
