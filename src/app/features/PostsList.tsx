import { mdiOpenInNew } from '@mdi/js';
import Icon from '@mdi/react';
import { format, parseISO } from 'date-fns';
import { useCallback, useEffect } from 'react';
import { useMemo, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Column, usePagination, useTable } from 'react-table';
import { Post } from 'rodolfohiok-sdk';
import AuthorizationService from '../../auth/Authorization.service';
import usePosts from '../../core/hooks/usePosts';
import modal from '../../core/utils/modal';
import Loading from '../components/Loading';
import PostTitleAnchor from '../components/PostTitleAnchor';
import Table from '../components/Table/Table';
import PostPreview from './PostPreview';

const BLOG_BASE_URL = process.env.REACT_APP_BLOG_SERVER_BASE_URL;

export default function PostsList() {
  const { paginatedPosts, fetchPosts } = usePosts();
  const [error, setError] = useState<Error>();
  const [page, setPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetchPosts({
      page: page,
      size: 5,
      showAll: true,
      sort: ['createdAt', 'desc'],
    })
      .catch((error) => setError(new Error(error.message)))
      .finally(() => setLoading(false));
  }, [fetchPosts, page]);

  if (error) throw error;

  const openInNew = useCallback(async (post: Post.Summary) => {
    let url = `${BLOG_BASE_URL}/posts/${post.id}/${post.slug}`;

    if (!post.published) {
      const codeVerifier = AuthorizationService.getCodeVerifier();
      const refreshToken = AuthorizationService.getRefreshToken();

      if (codeVerifier && refreshToken) {
        const { access_token } = await AuthorizationService.getNewToken({
          codeVerifier,
          refreshToken,
          scope: 'post:read',
        });

        url += `?token=${access_token}`;
      }
    }

    const a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.click();
  }, []);

  const columns = useMemo<Column<Post.Summary>[]>(
    () => [
      {
        Header: '',
        accessor: 'id', // accessor is the "key" in the data
        Cell: ({ row }) => (
          <div style={{ paddingLeft: 8, width: '16px' }}>
            <span
              style={{ cursor: 'pointer' }}
              onClick={() => openInNew(row.original)}
            >
              <Icon path={mdiOpenInNew} size={'14px'} color={'#09F'} />
            </span>
          </div>
        ),
      },
      {
        Header: () => <div style={{ textAlign: 'left' }}>Título</div>,
        accessor: 'title',
        width: 320,
        Cell: (props) => (
          <div
            style={{
              textAlign: 'left',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              maxWidth: 400,
            }}
          >
            <img
              width={24}
              height={24}
              src={props.row.original.editor.avatarUrls.small}
              alt={props.row.original.editor.name}
              title={props.row.original.editor.name}
            />
            <PostTitleAnchor
              title={props.value}
              href={`/posts/${props.row.original.id}`}
              onClick={(e) => {
                e.preventDefault();
                modal({
                  children: <PostPreview postId={props.row.original.id} />,
                });
              }}
            >
              {props.value}
            </PostTitleAnchor>
          </div>
        ),
      },
      {
        Header: () => <div style={{ textAlign: 'right' }}>Criação</div>,
        accessor: 'createdAt',
        Cell: (props) => (
          <div
            style={{
              textAlign: 'right',
              fontFamily: '"Roboto Mono", monospace',
            }}
          >
            {format(parseISO(props.value), 'dd/MM/yyyy')}
          </div>
        ),
      },
      {
        id: Math.random().toString(),
        accessor: 'published',
        Header: () => <div style={{ textAlign: 'right' }}>Status</div>,
        Cell: (props) => (
          <div style={{ textAlign: 'right' }}>
            {props.value ? 'Publicado' : 'Privado'}
          </div>
        ),
      },
    ],
    [openInNew]
  );

  const tableInstance = useTable<Post.Summary>(
    {
      data: paginatedPosts?.content || [],
      columns,
      manualPagination: true,
      initialState: { pageIndex: 0 },
      pageCount: paginatedPosts?.totalPages,
    },
    usePagination
  );

  if (!paginatedPosts?.content?.length)
    return (
      <div>
        <Skeleton height={32} />
        <Skeleton height={40} />
        <Skeleton height={40} />
        <Skeleton height={40} />
        <Skeleton height={40} />
        <Skeleton height={40} />
        <Skeleton height={40} />
        <Skeleton height={40} />
      </div>
    );

  return (
    <>
      <Loading show={loading} />
      <Table instance={tableInstance} onPaginate={setPage} />
    </>
  );
}
