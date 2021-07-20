import styled from 'styled-components';

const COLORS = {
  default: '#0099FF',
  primary: '#274060'
}

export const Wrapper = styled.div<{
  color: 'default' | 'primary'
}>`
  display: flex;
  flex-direction: column;
  color: #274060;

  .Description {
    font-size: 12px;
    font-weight: 500;
    text-transform: lowercase;
  }

  .Currency {
    font-size: 18px;
    font-weight: 500;
    color: ${p => COLORS[p.color]}
  }

  .Value {
    font-size: 18px;
    font-weight: 800;
    color: ${p => COLORS[p.color]}
  }
`;