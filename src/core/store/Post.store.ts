import { 
  createAction, 
  createAsyncThunk, 
  createReducer, 
  isFulfilled, 
  isPending, 
  isRejected 
} from "@reduxjs/toolkit";
import { Post, PostService } from "rodolfohiok-sdk";

interface PostSliceState {
  paginated?: Post.Paginated;
  fetching: boolean; 
}

const initialState: PostSliceState = {
  paginated: {
    page: 0,
    size: 0,
    totalElements: 1,
    totalPages: 1,
    content: []
  },
  fetching: false,
}

export const fetchPosts = createAsyncThunk(
  'post/fetchPosts',
  async function (query: Post.Query) {
    const posts = await PostService.getAllPosts(query);
    return posts;
  }
);

export const increment = createAction('post/increment');

export const postReducer = createReducer(initialState, builder => {
  const pendingActions = isPending(fetchPosts);
  const fulfilledActions = isFulfilled(fetchPosts);
  const rejectActions = isRejected(fetchPosts);
  
  builder
    .addCase(fetchPosts.fulfilled, (state, action) => {
      state.paginated = action.payload;
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
});
