import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Auth.slice";
import { editorReducer } from "./Editor.store";
import { postReducer } from "./Post.store";
import { userReducer } from "./User.slice";

const store = configureStore({
  reducer: {
    post: postReducer,
    user: userReducer,
    editor: editorReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
