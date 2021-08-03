import { ReactNode } from "react";
import styled from "styled-components"


export interface FieldDescriptorProps {
  label: string;
  value: ReactNode;
}

export default function FieldDescriptor({ label, value }: FieldDescriptorProps) {
  return <FieldDescriptorWrapper>
    <span className="Label">
      {label}:
    </span>
    <span className="Value">
      {value}
    </span>
  </FieldDescriptorWrapper>
}

const FieldDescriptorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: #274060;

  .Label {
    font-size: 12px;
    font-weight: 700;
    text-transform: lowercase;
  }

  .Value {
    font-size: 14px;
  }
`;