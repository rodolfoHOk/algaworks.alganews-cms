import { createAction, createAsyncThunk, createReducer, isFulfilled, isPending, isRejected } from "@reduxjs/toolkit";
import { Post } from "rodolfohiok-sdk";
import PostService from "../../sdk/services/Post.service";

interface PostSliceState {
  paginated?: Post.Paginated;
  fetching: boolean; 
  counter: number;
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
  counter: 0
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
    .addCase(increment, (state) => {
      state.counter++;
    })
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

// const postSlice = createSlice({
//   name: 'post',
//   initialState,
//   reducers: {},
//   extraReducers(builder) {
//     const pendingActions = isPending(fetchPosts);
//     const fulfilledActions = isFulfilled(fetchPosts);
//     const rejectActions = isRejected(fetchPosts);
//     builder
//       .addCase(fetchPosts.fulfilled, (state, action) => {
//         state.paginated = action.payload;
//       })
//       .addMatcher(pendingActions, (state) => {
//         state.fetching = true;
//       })
//       .addMatcher(fulfilledActions, (state) => {
//         state.fetching = false;
//       })
//       .addMatcher(rejectActions, (state) => {
//         state.fetching = false;
//       });
//   }
// });

// export const postReducer = postSlice.reducer;
