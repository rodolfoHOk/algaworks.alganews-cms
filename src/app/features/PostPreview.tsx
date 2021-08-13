import { useEffect, useState } from "react";
import styled from "styled-components";
import withBoundary from "../../core/hoc/withBoundary"
import { Post } from "../../sdk/@types";
import PostService from "../../sdk/services/Post.service";
import Button from "../components/Button/Button";
import MarkdownEditor from "../components/MarkdownEditor";
import Heading from "../components/Typography/Heading";
import Loading from "../components/Loading";

interface PostPreviewProps {
  postId: number
}

function PostPreview(props: PostPreviewProps) {
  const [post, setPost] = useState<Post.Detailed>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    PostService
      .getExistingPost(props.postId)
      .then(setPost)
      .finally(() => setLoading(false));
  }, [props.postId]);

  if (loading)
    return <Loading show />;

  if (!post)
    return null;

  return <PPWrapper>
    <PPHeader>
      <Heading level={3}>
        {post.title}
      </Heading>
      <PPActions>
        <Button
          variant="danger"
          label="Publicar"
        />
        <Button
          variant="primary"
          label="Editar"
        />
      </PPActions>
    </PPHeader>
    <PPImage
      src={post.imageUrls.medium}
      alt="imagem post"
    />
    <MarkdownEditor
      readOnly
      value={post.body}
    />
  </PPWrapper >
}

export default withBoundary(PostPreview);

const PPWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  width: 655px;
  max-height: 70vh;
  background-color: #F3F8FA;
  border: 1px solid #CCC;
  overflow-y: auto;
  box-shadow: 0 6px 6px rgba(0,0,0,.05);
`;

const PPHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PPActions = styled.div`
  display: flex;
  gap: 8px;
`;

const PPImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
`;
