import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import * as B from './Button.styles';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant: 'danger' | 'primary' | 'text',
  label: string
}

export default function Button({ variant, label, ref, ...props }: ButtonProps) {
  return <B.Wrapper
    variant={variant}
    {...props}
  >
    {label}
  </B.Wrapper>
}