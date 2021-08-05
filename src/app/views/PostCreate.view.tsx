import usePageTitle from "../../core/hooks/usePageTitle";
import PostForm from "../features/PostForm";
import DefaultLayout from "../layouts/Default";

export default function PostCreateView() {
  usePageTitle('Cadastro de posts');

  return <DefaultLayout>
    <PostForm />
  </DefaultLayout>
}
