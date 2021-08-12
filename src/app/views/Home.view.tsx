import usePageTitle from "../../core/hooks/usePageTitle"
import DefaultLayout from "../layouts/Default";
import UserPerformance from "../features/UserPerformance";
import PostsList from "../features/PostsList";
import UserTopTags from "../features/UserTopTags";
import UserEarnings from "../features/UserEarnings";
import ErrorBoundary from "../components/ErrorBoundary";
import Loading from "../components/Loading";

export default function Home() {
  usePageTitle('Home');

  return <DefaultLayout>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', alignItems: 'center', gap: '32px' }}>
      <Loading />
      <ErrorBoundary component="top tags">
        <UserTopTags />
      </ErrorBoundary>
      <ErrorBoundary component="ganhos">
        <UserEarnings />
      </ErrorBoundary>
    </div>
    <UserPerformance />
    <ErrorBoundary component="lista de posts">
      <PostsList />
    </ErrorBoundary>
  </DefaultLayout>
}
