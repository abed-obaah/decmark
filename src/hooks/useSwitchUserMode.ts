import { useNavigation } from "@react-navigation/native";
import { useAppDispatch, useAppSelector } from "./useAppStore";
import {
  switchUserMode,
  toggleIsModeSwitch,
  UserMode,
} from "@src/redux/appSlice";

export default () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const { userMode, isModeSwitch } = useAppSelector((state) => state.app);

  const handleToggleUserMode = (mode: UserMode) => {
    dispatch(switchUserMode(mode));

    setTimeout(() => {
      dispatch(toggleIsModeSwitch(true));
      navigation.navigate("BottomTabNavigator", { screen: "HomeScreen" });
    }, 750);
  };

  return { userMode, handleToggleUserMode, isModeSwitch };
};
