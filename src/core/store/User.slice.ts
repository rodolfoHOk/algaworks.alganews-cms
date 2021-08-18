import { createAsyncThunk, createSlice, isFulfilled, isPending, isRejected } from "@reduxjs/toolkit";
import { User, UserService } from "rodolfohiok-sdk";

interface UserSliceState {
  editors: User.EditorSummary[];
  fetching: boolean;
}

const initialState: UserSliceState = {
  editors: [],
  fetching: false
}

export const fetchEditors = createAsyncThunk(
  'user/fetchEditors',
  async function () {
    const editors = UserService.getAllEditors();
    return editors;
  }
 );

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers:{},
  extraReducers(builder) {
    const pendingActions = isPending(fetchEditors);
    const fulfilledActions = isFulfilled(fetchEditors);
    const rejectActions = isRejected(fetchEditors);
    builder
      .addCase(fetchEditors.fulfilled, (state, action) => {
        state.editors = action.payload
      })
      .addMatcher(pendingActions, (state) => {
        state.fetching = true;
      })
      .addMatcher(fulfilledActions, (state) => {
        state.fetching = false;
      })
      .addMatcher(rejectActions, (state) => {
        state.fetching = false;
      });
  }
});

export const userReducer = userSlice.reducer;
