import styled from "styled-components";
import withBoundary from "../../core/hoc/withBoundary"
import MarkdownEditor from "../components/MarkdownEditor";

interface PostPreviewProps {
  postId: number
}

function PostPreview(props: PostPreviewProps) {
  return <PostPreviewWrapper>
    {`features/PostPreview${props.postId}`}
    <MarkdownEditor
      readOnly
      value={'## Ola mundo\n- Esta é\n- Uma lista'}
    />
  </PostPreviewWrapper >
}

export default withBoundary(PostPreview);

const PostPreviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 655px;
  max-height: 70vh;
  overflow-y: auto;
  padding: 24px;
  background-color: #F3F8FA;
  border: 1px solid #CCC;
`;
