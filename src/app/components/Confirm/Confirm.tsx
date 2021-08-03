import Button from '../Button/Button';
import * as C from './Confirm.styles';

export interface ConfirmProps {
  title: string;
  onCancel: () => void;
  onConfirm: () => void;
}

export default function Confirm({ title, onCancel, onConfirm }: ConfirmProps) {
  return <C.Wrapper>
    <C.Title>{title}</C.Title>
    <C.Buttons>
      <Button
        variant="danger"
        label="Não"
        onClick={onCancel}
      />
      <Button
        variant="primary"
        label="Sim"
        onClick={onConfirm}
      />
    </C.Buttons>
  </C.Wrapper>
}