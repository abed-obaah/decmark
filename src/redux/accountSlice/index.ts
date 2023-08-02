import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RootState } from "@src/store";

export const uploadProfileImg = createAsyncThunk(
  "account/uploadProfileImg",
  async (data: any, thunkAPI) => {
    try {
      const {
        auth: { userInfo },
      } = thunkAPI.getState() as RootState;
      const config = {
        headers: {
          "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
          Accept: "application/json",
          Authorization: `Bearer ${userInfo?.authentication.token}`,
        },
      };
      await axios
        .post("/account", data, config)
        .then((res) => console.log(res.data));
    } catch (err: any) {
      console.log(
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message
      );
      return thunkAPI.rejectWithValue(
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message
      );
    }
  }
);

interface IAuthProps {
  isLoadingImg: boolean;
  success: any;
  error: any;
}

const initialState: IAuthProps = {
  isLoadingImg: false,
  success: null,
  error: null,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // Upload Image
      .addCase(uploadProfileImg.pending, (state) => {
        state.isLoadingImg = true;
      })
      .addCase(uploadProfileImg.fulfilled, (state) => {
        state.isLoadingImg = false;
        state.success = true;
      })
      .addCase(uploadProfileImg.rejected, (state, action) => {
        state.isLoadingImg = false;
        state.error = action.payload;
      });
  },
});

export default accountSlice.reducer;
