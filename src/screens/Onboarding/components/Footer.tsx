import React from "react";
import { View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@src/@types/navigation";
import { SIZES } from "../../../constants/theme";
import Paginator from "./Paginator";
import styled from "@src/constants/styled-components";
import AppButton from "../../../components/AppButton";

const Footer = ({
  currentIndex,
  handleNextSlide,
  handleSkipSlide,
  slides,
  scrollX,
}: any) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <SlideFooter
      style={{
        justifyContent: "space-between",
        paddingHorizontal: 20,
      }}
    >
      <Paginator slides={slides} scrollX={scrollX} />

      <View style={{ marginBottom: 20, flexDirection: "row" }}>
        {currentIndex === slides.length - 1 ? (
          <AppButton
            label="GET STARTED"
            radius={SIZES.rounded}
            onPress={() =>
              // navigation.replace("AuthStack", { screen: "WelcomeScreen" })
              navigation.replace("WelcomeScreen")
            }
          />
        ) : (
          <>
            <AppButton
              label="SKIP"
              background="transparent"
              radius={SIZES.rounded}
              onPress={handleSkipSlide}
            />
            <View style={{ width: 15 }} />
            <AppButton
              label="NEXT"
              radius={SIZES.rounded}
              onPress={handleNextSlide}
            />
          </>
        )}
      </View>
    </SlideFooter>
  );
};

export default Footer;

const SlideFooter = styled.View`
  background-color: ${({ theme }) => theme.PRIMARY_BACKGROUND_COLOR};
`;
