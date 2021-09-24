import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserService } from "rodolfohiok-sdk";
import getThunkStatus from "../utils/getThunkStatus";

type PA<T> = PayloadAction<T>;

interface AuthState {
  user: User.Detailed | null;
  fetching: boolean;
}

const initialState: AuthState = {
  user: null,
  fetching: false,
};

export const fetchUser = createAsyncThunk(
  "auth/fetchUser",
  async (userId: number, { rejectWithValue, dispatch }) => {
    try {
      const user = await UserService.getDetailedUser(userId);
      await dispatch(storeUser(user));
    } catch (err) {
      //@ts-ignore
      return rejectWithValue({ ...err });
    }
  }
);

const AuthSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    storeUser(state, action: PA<User.Detailed>) {
      state.user = action.payload;
    },
    clearUser(state) {
      state.user = null;
    },
  },
  extraReducers(builder) {
    const { success, error, loading } = getThunkStatus([fetchUser]);
    builder
      .addMatcher(success, (state) => {
        state.fetching = false;
      })
      .addMatcher(error, (state) => {
        state.fetching = false;
      })
      .addMatcher(loading, (state) => {
        state.fetching = true;
      });
  },
});

export const { storeUser, clearUser } = AuthSlice.actions;

const authReducer = AuthSlice.reducer;
export default authReducer;
