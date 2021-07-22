import * as P from './Profile.styles';

export interface ProfileProps {
  name: string;
  description: string;
  avatar: string;
}

export default function Profile({ name, description, avatar }: ProfileProps) {
  return <P.Wrapper>
    <P.Avatar src={avatar} alt={name} />
    <P.Info>
      <P.Name>{name}</P.Name>
      <P.Description>{description}</P.Description>
    </P.Info>
  </P.Wrapper>
}
