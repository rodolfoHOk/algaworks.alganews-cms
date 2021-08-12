import styled from "styled-components";
import withBoundary from "../../core/hoc/withBoundary"
import Button from "../components/Button/Button";
import MarkdownEditor from "../components/MarkdownEditor";
import Heading from "../components/Typography/Heading";

interface PostPreviewProps {
  postId: number
}

function PostPreview(props: PostPreviewProps) {
  return <PPWrapper>
    {/* {`features/PostPreview${props.postId}`} */}
    <PPHeader>
      <Heading level={3}>
        Você sabe como é trabalhar em um startup?
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
      src="http://localhost:8080/downloads/posts/large/como-contribuir-para-um-repositorio-no-github.jpg"
      alt="imagem post"
    />
    <MarkdownEditor
      readOnly
      value={'Olá, mundo!\n- Esta é\n- uma lista\n- de teste.\n- Tenho que\n- testar\n- scroll.'}
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
