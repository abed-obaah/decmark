import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DefaultTheme } from "styled-components/native";
import { lightTheme } from "@src/constants/theme";

export type UserMode = "receiver" | "provider";

interface IAppProps {
  theme: DefaultTheme;
  userMode: UserMode;
  isModeSwitch: boolean;
  isAppFirstLaunch: boolean | null;
}

const initialState: IAppProps = {
  theme: lightTheme,
  userMode: "receiver",
  isModeSwitch: false,
  isAppFirstLaunch: null,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    switchUserMode: (state, action: PayloadAction<UserMode>) => {
      state.userMode = action.payload;
    },
    toggleIsModeSwitch: (state, action: PayloadAction<boolean>) => {
      state.isModeSwitch = action.payload;
    },
    setIsAppFirstLaunch: (state, action: PayloadAction<boolean>) => {
      state.isAppFirstLaunch = action.payload;
    },
    swithTheme: (state, action: PayloadAction<DefaultTheme>) => {
      state.theme = action.payload;
    },
  },
});

export const {
  switchUserMode,
  toggleIsModeSwitch,
  setIsAppFirstLaunch,
  swithTheme,
} = appSlice.actions;
export default appSlice.reducer;
