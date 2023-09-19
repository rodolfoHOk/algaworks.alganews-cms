import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Post } from 'rodolfohiok-sdk';
import selectPaginatedPosts from '../selectors/selectPaginatedPosts';
import selectPostsFetching from '../selectors/selectPostsFetching';
import * as PostActions from '../store/Post.store';
import { AppDispatch } from '../store';

export default function usePosts() {
  const dispatch = useDispatch<AppDispatch>();

  const paginatedPosts = useSelector(selectPaginatedPosts);
  const loading = useSelector(selectPostsFetching);

  const fetchPosts = useCallback(
    async function (query: Post.Query) {
      dispatch(PostActions.fetchPosts(query));
    },
    [dispatch]
  );

  return {
    paginatedPosts,
    loading,
    fetchPosts,
  };
}
