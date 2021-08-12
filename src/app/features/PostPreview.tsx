import { transparentize } from "polished";
import styled from "styled-components";
import withBoundary from "../../core/hoc/withBoundary"

interface PostPreviewProps {
  postId: number
}

function PostPreview(props: PostPreviewProps) {
  return <PostPreviewWrapper>
    {`features/PostPreview${props.postId}`}
  </PostPreviewWrapper >
}

export default withBoundary(PostPreview);

const PostPreviewWrapper = styled.div`
  background-color: #fff;
  padding: 24px;
  border: 1px solid ${transparentize(0.9, '#274060')};
`;
