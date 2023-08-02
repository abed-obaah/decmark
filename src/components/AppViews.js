import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import useAppTheme from "@src/hooks/useAppTheme";

export const AppSafeAreaView = (props) => {
  const { theme } = useAppTheme();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.PRIMARY_BACKGROUND_COLOR,
        ...props.style,
      }}
    >
      {props.children}
    </SafeAreaView>
  );
};

export const AppScrollView = (props) => {
  const { theme } = useAppTheme();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps={"handled"}
      contentContainerStyle={{
        paddingHorizontal: 20,
        ...props.style,
      }}
      {...props}
    >
      {props.children}
    </ScrollView>
  );
};

export const AppRareScrollView = (props) => {
  const { theme } = useAppTheme();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps={"handled"}
      contentContainerStyle={{
        backgroundColor: theme.RARE_BACKGROUND_COLOR,
        ...props.style,
      }}
    >
      {props.children}
    </ScrollView>
  );
};

export const AppSectionView = (props) => {
  const { theme } = useAppTheme();

  return (
    <View
      style={{
        backgroundColor: theme.PRIMARY_BACKGROUND_COLOR,
        paddingVertical: 20,
        marginBottom: 10,
        ...props.style,
      }}
    >
      {props.children}
    </View>
  );
};

export const AppView = (props) => {
  const { theme } = useAppTheme();

  return (
    <View
      style={{
        backgroundColor: theme.PRIMARY_BACKGROUND_COLOR,
        ...props.style,
      }}
    >
      {props.children}
    </View>
  );
};
