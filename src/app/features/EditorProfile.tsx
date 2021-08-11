import { transparentize } from "polished";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { User } from "../../sdk/@types";
import UserService from "../../sdk/services/User.service";
import getEditorDescription from "../../sdk/utils/getEditorDescription";
import FieldDescriptor from "../components/FieldDescriptor/FieldDescriptor";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import Paragraph from "../components/Typography/Paragraph";
import ValueDescriptor from "../components/ValueDescriptor/ValueDescriptor";

interface EditorProfileProps {
  hidePersonalData?: boolean;
}

export default function EditorProfile(props: EditorProfileProps) {
  const params = useParams<{ id: string }>();
  const [editor, setEditor] = useState<User.EditorDetailed>();

  useEffect(() => {
    UserService.getExistingEditor(Number(params.id))
      .then(setEditor);
  }, [params.id]);

  if (!editor)
    return null;

  return <EditorProfileWrapper>
    <EditorHeading>
      <HeadingAvatar src={editor.avatarUrls.small} alt={editor.name} />
      <HeadingInfo>
        <HeadingName>{editor.name}</HeadingName>
        <HeadingDescription>{getEditorDescription(new Date(editor.createdAt))}</HeadingDescription>
      </HeadingInfo>
    </EditorHeading>
    <EditorData>
      <EditorResume>
        <Paragraph size="small">
          {editor.bio}
        </Paragraph>
        {
          editor.skills?.map(skill => (
            <ProgressBar title={skill.name} progress={skill.percentage} theme="default" />
          ))
        }
      </EditorResume>
      <EditorPersonalInfo>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <FieldDescriptor label="cidade" value={editor.location.city} />
          <FieldDescriptor label="estado" value={editor.location.state} />
        </div>
        {
          !props.hidePersonalData &&
          <>
            <FieldDescriptor label="telefone" value={'+55 27 91234-5678'} />
            <FieldDescriptor label="email" value={'ana.castilho@redacao.algacontent.com'} />
            <FieldDescriptor label="data de nascimento" value={'26 de Dezembro de 1997 (22  anos)'} />
          </>
        }
      </EditorPersonalInfo>
    </EditorData>
    {
      !props.hidePersonalData &&
      <EditorEarnings>
        <ValueDescriptor description={'palavras nesta semana'} value={20345} color={'primary'} />
        <ValueDescriptor description={'ganhos na semana'} value={20345 * 0.10} color={'default'} isCurrency />
        <ValueDescriptor description={'palavras no mês'} value={140432} color={'primary'} />
        <ValueDescriptor description={'ganhos no mês'} value={140432 * 0.10} color={'default'} isCurrency />
        <ValueDescriptor description={'total de palavras'} value={2434423} color={'primary'} />
        <ValueDescriptor description={'ganhos sempre'} value={2434423 * 0.10} color={'default'} isCurrency />
      </EditorEarnings>
    }
  </EditorProfileWrapper>
}

const EditorProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
`;

const EditorHeading = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  padding-bottom: 24px;
  border-bottom: 1px solid ${transparentize(0.9, '#274060')};
`;

export const HeadingAvatar = styled.img`
  width: 48px;
  height: 48px;
`;

export const HeadingInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;

export const HeadingName = styled.span`
  font-size: 18px;
  font-weight: 400;
`;

export const HeadingDescription = styled.span`
  font-size: 12px;
  font-weight: 400;
`;

const EditorData = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
`;

const EditorResume = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const EditorPersonalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const EditorEarnings = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
`;
