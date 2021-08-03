import styled from "styled-components";
import { transparentize } from 'polished';

const COLORS = {
  red: '#F84735',
  primary: '#0099FF',
  foreground: '#508AC9'
}

const THEME = {
  danger: {
    bg: '#F84735',
    color: '#FFFFFF',
    onHover: `
      box-shadow: 0 3px 6px rgba(0,0,0,.2);
    `,
    disabled: {
      color: '#F84735',
      bg: transparentize(0.75, COLORS.red)
    }
  },
  primary: {
    bg: '#0099FF',
    color: '#FFFFFF',
    onHover: `
      box-shadow: 0 3px 6px rgba(0,0,0,.2);
    `,
    disabled: {
      color: '#FFFFFF',
      bg: transparentize(0.44, COLORS.primary)
    }
  },
  text: {
    bg: 'transparent',
    color: '#274060',
    onHover: `
      border-color: #274060;
    `,
    disabled: {
      color: '#274060',
      bg: transparentize(0.44, COLORS.foreground)
    }
  }
}

export const Wrapper = styled.button<{
  variant: 'danger' | 'primary' | 'text',
}>`
  padding: 6px 8px 4px;
  border: 1px solid ${p => THEME[p.variant].bg};
  color: ${p => THEME[p.variant].color};
  background-color: ${p => THEME[p.variant].bg};

  &:hover,
  &:focus {
    ${p => THEME[p.variant].onHover}
  }

  &:disabled {
    color: ${p => THEME[p.variant].disabled.color};
    background-color: ${p => THEME[p.variant].disabled.bg};
    border-color: transparent;
    
    pointer-events: none;
  }
`;