import styled from 'styled-components';
import Icon from '@mdi/react';
import { mdiAlert } from '@mdi/js';
import Heading from '../Typography/Heading';

export interface ErrorDisplayProps {
  small?: boolean;
  title?: string;
  message?: string;
}

export default function ErrorDisplay(props: ErrorDisplayProps) {
  return <ErrorDisplayWrapper>
    <Icon
      path={mdiAlert}
      size={props.small ? "24" : "48"}
    />
    <Heading level={2}>
      {props.title || 'Erro ao renderizar componente'}
    </Heading>
    <span>{props.message || 'Erro desconhecido'}</span>
  </ErrorDisplayWrapper>
}

const ErrorDisplayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 9px;
  color: #274060;

  span {
    font-family: 'Roboto Mono', monospace;
    font-size: 12px;
  }
`;
