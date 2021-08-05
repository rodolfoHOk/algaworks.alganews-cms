import { transparentize } from "polished";
import styled from "styled-components"
import FieldDescriptor from "../components/FieldDescriptor/FieldDescriptor";
import { ProfileProps } from "../components/Profile/Profile";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import Paragraph from "../components/Typography/Paragraph";
import ValueDescriptor from "../components/ValueDescriptor/ValueDescriptor";

type Skill = {
  title: string;
  progress: number;
}

type PersonalInfo = {
  city: string;
  state: string;
  phone: string;
  email: string;
  birthDate: string;
}

interface EditorProfileProps {
  profile: ProfileProps;
  bio: string;
  personalInfo: PersonalInfo;
  skills: Skill[];
  words: number[];
}

export default function EditorProfile(props: EditorProfileProps) {
  return <EditorProfileWrapper>
    <EditorHeading>
      <HeadingAvatar src={props.profile.avatar} alt={props.profile.name} />
      <HeadingInfo>
        <HeadingName>{props.profile.name}</HeadingName>
        <HeadingDescription>{props.profile.description}</HeadingDescription>
      </HeadingInfo>
    </EditorHeading>
    <EditorData>
      <EditorResume>
        <Paragraph size="small">
          {props.bio}
        </Paragraph>
        {
          props.skills.map(skill => (
            <ProgressBar title={skill.title} progress={skill.progress} theme="default" />
          ))
        }
      </EditorResume>
      <EditorPersonalInfo>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <FieldDescriptor label="cidade" value={props.personalInfo.city} />
          <FieldDescriptor label="estado" value={props.personalInfo.state} />
        </div>
        <FieldDescriptor label="celular" value={props.personalInfo.phone} />
        <FieldDescriptor label="email" value={props.personalInfo.email} />
        <FieldDescriptor label="data de nascimento" value={props.personalInfo.birthDate} />
      </EditorPersonalInfo>
    </EditorData>
    <EditorEarnings>
      <ValueDescriptor description={'palavras nesta semana'} value={props.words[0]} color={'primary'} />
      <ValueDescriptor description={'ganhos na semana'} value={props.words[0] * 0.10} color={'default'} isCurrency />
      <ValueDescriptor description={'palavras no mês'} value={props.words[1]} color={'primary'} />
      <ValueDescriptor description={'ganhos no mês'} value={props.words[1] * 0.10} color={'default'} isCurrency />
      <ValueDescriptor description={'total de palavras'} value={props.words[2]} color={'primary'} />
      <ValueDescriptor description={'ganhos sempre'} value={props.words[2] * 0.10} color={'default'} isCurrency />
    </EditorEarnings>
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
