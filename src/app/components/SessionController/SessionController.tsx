import Button from '../Button/Button';
import * as SC from './SessionController.styles';

export interface SessionControllerProps {
  name: string;
  description: string;
  avatar: string;
  onLogout?: () => void;
}

export default function SessionController(props: SessionControllerProps) {
  return <SC.Wrapper>
    <SC.Avatar src={props.avatar} alt={props.name} />
    <SC.Name>
      {props.name}
    </SC.Name>
    <SC.Description>
      {props.description}
    </SC.Description>
    <Button
      variant="danger"
      label="logout"
      onClick={props.onLogout}
    />
  </SC.Wrapper>
}
