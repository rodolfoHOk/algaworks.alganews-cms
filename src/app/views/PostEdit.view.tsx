import { useParams } from "react-router-dom";
import usePageTitle from "../../core/hooks/usePageTitle";
import PostForm from "../features/PostForm";
import DefaultLayout from "../layouts/Default";

export default function PostEditView() {
  usePageTitle('Edição de posts');

  const params = useParams<{ id: string }>();

  return <DefaultLayout>
    <PostForm postId={Number(params.id)} />
  </DefaultLayout>
}
