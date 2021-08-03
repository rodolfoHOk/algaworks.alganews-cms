import usePageTitle from "../../core/hooks/usePageTitle"
import DefaultLayout from "../layouts/Default";
import UserPerformance from "../features/UserPerformance";
import PostsList from "../features/PostsList";
import UserTopTags from "../features/UserTopTags";
import UserEarnings from "../features/UserEarnings";

export default function Home() {
  usePageTitle('Home');

  return <DefaultLayout>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', alignItems: 'center', gap: '32px' }}>
      <UserTopTags />
      <UserEarnings />
    </div>
    <UserPerformance />
    <PostsList />
  </DefaultLayout>
}
