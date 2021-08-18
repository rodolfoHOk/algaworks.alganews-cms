import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "./Post.slice";
import { userReducer } from "./User.slice";

const store = configureStore({
  reducer: {
    post: postReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
