import Icon from '@mdi/react';
import { mdiInformation } from '@mdi/js';
import * as I from './Info.styled';

export interface InfoProps {
  title: string;
  description: string;
}

export default function Info(props: InfoProps) {
  return <I.Wrapper>
    <I.InnerContent>
      <I.InfoIcon>
        <Icon
          color="#09F"
          size="48px"
          path={mdiInformation}
        />
      </I.InfoIcon>
      <I.Messages>
        <I.Title>
          {props.title}
        </I.Title>
        <p>
          {props.description}
        </p>
      </I.Messages>
    </I.InnerContent>
  </I.Wrapper>
}
