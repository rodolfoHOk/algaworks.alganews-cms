import usePageTitle from "../../core/hooks/usePageTitle"
import DefaultLayout from "../layouts/Default";

export default function Home() {
  usePageTitle('Home');

  return <DefaultLayout>
    <h1>Home</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non debitis itaque, officiis quisquam minima necessitatibus et ducimus sed molestias similique! Facere repudiandae earum iusto officia dolorem ad accusamus blanditiis ea.</p>
  </DefaultLayout>
}
