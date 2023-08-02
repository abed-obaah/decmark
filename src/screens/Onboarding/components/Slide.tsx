import React from "react";
import { StyleSheet, View, Image, useWindowDimensions } from "react-native";
import { XtraLargeText, MediumText } from "@src/components/AppText";
import styled from "@src/constants/styled-components";

const Slide = ({ item }: any) => {
  const { width } = useWindowDimensions();

  return (
    <View style={{ width, flex: 0.8 }}>
      <Image
        source={item.image}
        style={{
          height: "100%",
          width,
          resizeMode: "cover",
        }}
      />
      <View
        style={[
          StyleSheet.absoluteFillObject,
          { backgroundColor: "rgba(0,0,0,.25)" },
        ]}
      />
      <SlideContent style={{ width, paddingHorizontal: 15 }}>
        <XtraLargeText
          style={{
            marginTop: 25,
            textAlign: "center",
          }}
        >
          {item.title}
        </XtraLargeText>
        <MediumText
          style={{
            textAlign: "center",
            marginTop: 10,
          }}
        >
          {item.description}
        </MediumText>
      </SlideContent>
    </View>
  );
};

export default Slide;

const SlideContent = styled.View`
  position: absolute;
  bottom: 0;
  background-color: ${({ theme }) => theme.PRIMARY_BACKGROUND_COLOR};
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
`;
