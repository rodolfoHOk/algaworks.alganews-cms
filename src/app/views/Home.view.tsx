import usePageTitle from "../../core/hooks/usePageTitle"
import DefaultLayout from "../layouts/Default";
import UserPerformance from "../features/UserPerformance";
import PostsList from "../features/PostsList";

export default function Home() {
  usePageTitle('Home');

  return <DefaultLayout>
    <UserPerformance />
    <PostsList />
  </DefaultLayout>
}
