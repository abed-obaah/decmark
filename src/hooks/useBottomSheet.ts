import { useRef, useMemo, useCallback } from "react";
import BottomSheet from "@gorhom/bottom-sheet";

const useBottomSheet = () => {
  const sheetRef = useRef<BottomSheet>(null);

  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
  }, []);

  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  return { sheetRef, handleSnapPress, handleClosePress };
};

export default useBottomSheet;
