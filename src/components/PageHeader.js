import { StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";
import useAppTheme from "@src/hooks/useAppTheme";
import { MaterialIcons } from "@expo/vector-icons";
import { SIZES } from "@src/constants/theme";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SCREEN_WIDTH } from "@src/constants/variables";

const PageHeader = ({ title }) => {
  const { theme } = useAppTheme();
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    titleText: {
      color: theme.PRIMARY_TEXT_COLOR,
      fontFamily: "SourceSansPro-SemiBold",
      fontSize: 18,
      alignSelf: "center",
    },
    titleView: {
      flexDirection: "row",
      padding: SIZES.md,
      justifyContent: "space-between",
      top: StatusBar.currentHeight,
      zIndex: 3,
    },
  });
  return (
    <View style={styles.titleView}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialIcons name="west" size={24} color={theme.PRIMARY_TEXT_COLOR} />
      </TouchableOpacity>
      <Text style={styles.titleText}>{title}</Text>
      <View />
    </View>
  );
};

export default PageHeader;
