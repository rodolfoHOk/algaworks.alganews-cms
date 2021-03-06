import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { getEditorDescription } from "rodolfohiok-sdk";
import styled from "styled-components"
import useEditors from "../../core/hooks/useEditors";
import Profile from "../components/Profile/Profile"

export default function EditorsList() {
  const { editorsList, loading, fetchAllEditors } = useEditors();

  useEffect(() => {
    fetchAllEditors();
  }, [fetchAllEditors]);

  if (!editorsList.length)
    return <EditorsListWrapper>
      <Skeleton width={328} height={82} />
      <Skeleton width={328} height={82} />
      <Skeleton width={328} height={82} />
    </EditorsListWrapper>

  return <EditorsListWrapper>
    {
      editorsList.map(editor => (
        <Profile
          key={editor.id}
          name={editor.name}
          description={getEditorDescription(new Date(editor.createdAt))}
          avatarUrl={editor.avatarUrls.small}
          editorId={editor.id}
        />
      ))
    }
    {
      loading ? 'buscando mais informações' : null
    }
  </EditorsListWrapper>
}

const EditorsListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`;
