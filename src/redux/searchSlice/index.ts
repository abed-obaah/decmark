import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RootState } from "@src/store";

export const search = createAsyncThunk(
  "account/search",
  async (search: any, thunkAPI) => {
    try {
      const {
        auth: { userInfo },
      } = thunkAPI.getState() as RootState;
      const config = {
        headers: {
          "Content-Type": `multipart/form-search; boundary=${search._boundary}`,
          Accept: "application/json",
          Authorization: `Bearer ${userInfo?.authentication.token}`,
        },
      };
      await axios
        .post("/search", search, config)
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
  search: boolean;
  success: any;
  error: any;
}

const initialState: IAuthProps = {
  search: false,
  success: null,
  error: null,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  // extraReducers(builder) {
  //   builder
  //     .addCase(search.pending, (state) => {
  //       state.isLoadingImg = true;
  //     })
  //     .addCase(search.fulfilled, (state) => {
  //       state.isLoadingImg = false;
  //       state.success = true;
  //     })
  //     .addCase(search.rejected, (state, action) => {
  //       state.isLoadingImg = false;
  //       state.error = action.payload;
  //     });
  // },
});

export default searchSlice.reducer;
