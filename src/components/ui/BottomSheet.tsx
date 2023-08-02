import React, { FC, useMemo } from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import BottomSheet, {
  useBottomSheetDynamicSnapPoints,
  BottomSheetView,
} from "@gorhom/bottom-sheet";

interface BottomSheetProps {
  sheetRef: any;
  snapPoints?: any[];
  children: React.ReactNode;
}

const AppBottomSheet: FC<BottomSheetProps> = ({
  sheetRef,
  children,
  snapPoints = ["50%", "100%"],
}) => {
  const { height, width } = useWindowDimensions();

  return (
    <View style={[styles.container, { height, width }]}>
      <BottomSheet
        ref={sheetRef}
        index={-1}
        snapPoints={useMemo(() => [...snapPoints], [])}
        enablePanDownToClose
        backgroundStyle={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: -13,
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,
          elevation: 6,
          borderRadius: 20,
        }}
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: -13,
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,
          elevation: 6,
        }}
        // onChange={handleSheetChanges}
      >
        {children}
      </BottomSheet>
    </View>
  );
};

export const AppBottomSheetDynamic: FC<BottomSheetProps> = ({ sheetRef }) => {
  const initialSnapPoints = useMemo(() => ["25%", "CONTENT_HEIGHT"], []);

  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(initialSnapPoints);

  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={animatedSnapPoints}
      handleHeight={animatedHandleHeight}
      contentHeight={animatedContentHeight}
    >
      <BottomSheetView
        style={styles.contentContainer}
        onLayout={handleContentLayout}
      >
        //... views to be measured
      </BottomSheetView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    position: "absolute",
    // backgroundColor: 'rgba(0,0,0,.25)'
  },
  contentContainer: {
    // flex: 1,
    // alignItems: "center",
  },
});

export default AppBottomSheet;
