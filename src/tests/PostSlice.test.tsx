import '@testing-library/react';
import { AppStore, createAppStore } from '../core/store';
import { fetchPosts } from '../core/store/Post.store';

// beforeEach(() => console.log('ihuuu'));

let store: AppStore;

describe('post slice', () => {
  // beforeEach(() => console.log('ihuuu'));

  beforeEach(() => {
    store = createAppStore();
  });

  // unitario
  it('starts with empty array on content', () => {
    const state = store.getState().post;
    expect(state.paginated?.content).toHaveLength(0);
  });

  // integração
  it('update state after fetchPosts dispatch', async () => {
    await store.dispatch(fetchPosts({}));
    const state = store.getState().post;
    expect(state.paginated?.content?.length).toBeGreaterThanOrEqual(1);
  });

  it('log do state', () => {
    console.log(store.getState().post.paginated?.content?.length);
  });
});

// it('a', () => {});
// it('b', () => {});
