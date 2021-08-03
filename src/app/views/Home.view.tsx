import usePageTitle from "../../core/hooks/usePageTitle"
import DefaultLayout from "../layouts/Default";
import UserPerformance from "../features/UserPerformance";
import PostsList from "../features/PostsList";
import UserTopTags from "../features/UserTopTags";

export default function Home() {
  usePageTitle('Home');

  return <DefaultLayout>
    <UserTopTags />
    <UserPerformance />
    <PostsList />
  </DefaultLayout>
}
