/** @format */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

interface UserState {
  currentUser: Object | undefined;
  isFetching: boolean;
  error: boolean;
  token: string | undefined;
}

const initialState: UserState = {
  currentUser: undefined,
  isFetching: false,
  error: false,
  token: undefined,
};

const UserSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSucess: (state, action: PayloadAction<any>) => {
      state.isFetching = false;
      state.currentUser = action.payload.user;
      state.token = action.payload.token;
    },
    getSelfHelper: (state, action: PayloadAction<any>) => {
      state.isFetching = false;
      state.currentUser = action.payload.user;
      state.token = Cookies.get('token');
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { loginStart, loginSucess, loginFailure, getSelfHelper } =
  UserSlice.actions;
export default UserSlice.reducer;
