import * as P from './Profile.styles';

export interface ProfileProps {
  name: string;
  description: string;
  avatarUrl: string;
  editorId: number;
}

export default function Profile({ name, description, avatarUrl, editorId }: ProfileProps) {
  return <P.Wrapper tabIndex={0} to={`/editores/${editorId}`}>
    <P.Avatar src={avatarUrl} alt={name} />
    <P.Info>
      <P.Name>{name}</P.Name>
      <P.Description>{description}</P.Description>
    </P.Info>
  </P.Wrapper >
}
