import { format, parseISO } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import { transparentize } from 'polished';
import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { getEditorDescription, User } from 'rodolfohiok-sdk';
import styled from 'styled-components';
import useAuth from '../../core/hooks/useAuth';
import useSingleEditor from '../../core/hooks/useSingleEditor';
import FieldDescriptor from '../components/FieldDescriptor/FieldDescriptor';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import Paragraph from '../components/Typography/Paragraph';
import ValueDescriptor from '../components/ValueDescriptor/ValueDescriptor';

interface EditorProfileProps {
  hidePersonalData?: boolean;
}

export default function EditorProfile(props: EditorProfileProps) {
  const params = useParams<{ id: string }>();

  const { editor, fetchEditor } = useSingleEditor();
  const { user } = useAuth();

  const editorIsAuthenticatedUser = useMemo(
    () => Number(params.id) === user?.id,
    [params.id, user]
  );

  const editorData = useMemo(
    () => (editorIsAuthenticatedUser ? user : editor),
    [editorIsAuthenticatedUser, user, editor]
  );

  useEffect(() => {
    if (!editorIsAuthenticatedUser) fetchEditor(Number(params.id));
  }, [fetchEditor, params.id, editorIsAuthenticatedUser]);

  if (!editorData) return null;

  return (
    <EditorProfileWrapper>
      <EditorHeading>
        <HeadingAvatar
          src={editorData.avatarUrls.small}
          alt={editorData.name}
        />
        <HeadingInfo>
          <HeadingName>{editorData.name}</HeadingName>
          {editorData.createdAt && (
            <HeadingDescription>
              {getEditorDescription(new Date(editorData.createdAt))}
            </HeadingDescription>
          )}
        </HeadingInfo>
      </EditorHeading>
      <EditorData>
        <EditorResume>
          {editorData.bio && (
            <Paragraph size="small">{editorData.bio}</Paragraph>
          )}
          {editorData.skills?.map((skill) => (
            <ProgressBar
              key={skill.name}
              title={skill.name}
              progress={skill.percentage}
              theme="default"
            />
          ))}
        </EditorResume>
        <EditorPersonalInfo>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
            {editorData.location.city && (
              <FieldDescriptor
                label="cidade"
                value={editorData.location.city}
              />
            )}
            {editorData.location.state && (
              <FieldDescriptor
                label="estado"
                value={editorData.location.state}
              />
            )}
          </div>
          {(editorData as User.Detailed)?.phone && (
            <FieldDescriptor
              label="telefone"
              value={(editorData as User.Detailed)?.phone}
            />
          )}
          {(editorData as User.Detailed)?.email && (
            <FieldDescriptor
              label="email"
              value={(editorData as User.Detailed)?.email}
            />
          )}
          {(editorData as User.Detailed)?.birthdate && (
            <FieldDescriptor
              label="data de nascimento"
              value={format(
                parseISO((editorData as User.Detailed).birthdate),
                "dd 'de' MMM 'de' yyyy ",
                { locale: ptBr }
              )}
            />
          )}
        </EditorPersonalInfo>
      </EditorData>
      {(editorData as User.Detailed).metrics && (
        <EditorEarnings>
          <ValueDescriptor
            description={'palavras nesta semana'}
            value={(editorData as User.Detailed).metrics.weeklyWords}
            color={'primary'}
          />
          <ValueDescriptor
            description={'ganhos na semana'}
            value={(editorData as User.Detailed).metrics.weeklyEarnings}
            color={'default'}
            isCurrency
          />
          <ValueDescriptor
            description={'palavras no mês'}
            value={(editorData as User.Detailed).metrics.monthlyWords}
            color={'primary'}
          />
          <ValueDescriptor
            description={'ganhos no mês'}
            value={(editorData as User.Detailed).metrics.monthlyEarnings}
            color={'default'}
            isCurrency
          />
          <ValueDescriptor
            description={'total de palavras'}
            value={(editorData as User.Detailed).metrics.lifetimeWords}
            color={'primary'}
          />
          <ValueDescriptor
            description={'ganhos sempre'}
            value={(editorData as User.Detailed).metrics.lifetimeEarnings}
            color={'default'}
            isCurrency
          />
        </EditorEarnings>
      )}
    </EditorProfileWrapper>
  );
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
