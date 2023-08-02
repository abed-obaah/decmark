import React from "react";
import { View, TouchableOpacity, useWindowDimensions } from "react-native";
import useTheme from "../hooks/useAppTheme";
import { MediumText } from "./AppText";

export default GroupTab = ({ tabs, activeTab, setActiveTab }) => {
  const { theme } = useTheme();
  const { width } = useWindowDimensions();

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderBottomColor: theme.PRIMARY_BORDER_COLOR,
      }}
    >
      {tabs.map((item, i) => (
        <TouchableOpacity
          key={i}
          onPress={() => setActiveTab(i)}
          style={{
            width: width / tabs.length,
            alignItems: "center",
            paddingHorizontal: 10,
            paddingBottom: 10,
            borderBottomWidth: 3,
            borderBottomColor: activeTab === i ? theme.gold : "transparent",
          }}
        >
          <MediumText
            style={{
              color:
                activeTab === i
                  ? theme.PRIMARY_TEXT_COLOR
                  : theme.SECONDARY_TEXT_COLOR,
            }}
          >
            {item}
          </MediumText>
        </TouchableOpacity>
      ))}
    </View>
  );
};
