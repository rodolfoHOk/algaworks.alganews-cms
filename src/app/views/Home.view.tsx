import usePageTitle from "../../core/hooks/usePageTitle"
import DefaultLayout from "../layouts/Default";
import UserMetrics from "../features/UserMetrics";
import PostsList from "../features/PostsList";

export default function Home() {
  usePageTitle('Home');

  return <DefaultLayout>
    <UserMetrics />
    <PostsList />
  </DefaultLayout>
}
