import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  dark: boolean,
}

const initialState: UserState = {
  dark: false,
};

export const beerSlice = createSlice({
  name: "beer",
  initialState,
  reducers: {
    setDarkTheme(state) {
      state.dark = !state.dark;
    },
    // usersFetchingSuccess(state, action: PayloadAction<IUser[]>) {
    //   state.isLoading = false;
    //   state.error = "";
    //   state.users = action.payload;
    // },
    // usersFetchingError(state, action: PayloadAction<string>) {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
  },
  // extraReducers: {
  //   [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
  //     state.isLoading = false;
  //     state.error = "";
  //     state.users = action.payload;
  //   },
  //   [fetchUsers.pending.type]: (state) => {
  //     state.isLoading = true;
  //   },
  //   [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   }
  // }
})

export const { setDarkTheme } = beerSlice.actions;

export default beerSlice.reducer;