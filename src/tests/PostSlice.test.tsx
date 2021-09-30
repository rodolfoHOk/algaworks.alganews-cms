import '@testing-library/react';
import { AppStore, createAppStore } from '../core/store';
import { fetchPosts } from '../core/store/Post.store';

jest.mock('rodolfohiok-sdk', () => ({
  PostService: {
    getAllPosts: () => ({
      page: 2,
      size: 9,
      totalPages: 15,
      totalElements: 442,
      content: [
        {
          id: 42,
          slug: 'como-fazer-x-coisas-com-react-js',
          title: 'Como fazer X coisas com React.js',
          imageUrls: {
            default:
              'https://storage.googleapis.com/alganews-files/posts/avatar-joao.jpeg',
            small:
              'https://storage.googleapis.com/alganews-files/posts/avatar-joao-small.jpeg',
            medium:
              'https://storage.googleapis.com/alganews-files/posts/avatar-joao-medium.jpeg',
            large:
              'https://storage.googleapis.com/alganews-files/posts/avatar-joao-large.jpeg',
          },
          editor: {
            id: 29,
            name: 'Daniel Bonifacio',
            avatarUrls: {
              default:
                'https://storage.googleapis.com/alganews-files/posts/avatar-joao.jpeg',
              small:
                'https://storage.googleapis.com/alganews-files/posts/avatar-joao-small.jpeg',
              medium:
                'https://storage.googleapis.com/alganews-files/posts/avatar-joao-medium.jpeg',
              large:
                'https://storage.googleapis.com/alganews-files/posts/avatar-joao-large.jpeg',
            },
            createdAt: '2017-03-04T00:12:45Z',
          },
          createdAt: '2020-12-04T00:12:45-03:00',
          updatedAt: '2020-12-05T00:12:45-03:00',
          published: true,
          tags: ['JavaScript'],
          canBePublished: true,
          canBeUnpublished: true,
          canBeDeleted: true,
          canBeEdited: true,
        },
      ],
    }),
  },
}));

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

  // it('log do state', () => {
  //   console.log(store.getState().post.paginated?.content?.length);
  // });
});

// it('a', () => {});
// it('b', () => {});
