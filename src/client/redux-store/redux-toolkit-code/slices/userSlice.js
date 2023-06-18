import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userSession: {},
};

const userSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setUserSession: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.userSession = action.payload;
    },
    userLogout: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.userSession = {};
    },
  },
});

export const { setUserSession, userLogout } = userSlice.actions;

export default userSlice.reducer;
