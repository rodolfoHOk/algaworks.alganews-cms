import { transparentize } from 'polished';
import styled from 'styled-components';

export const Wrapper = styled.a`
  display: flex;
  align-items: center;
  gap: 24px;

  padding: 16px;
  border: 1px solid ${transparentize(0.90, '#274060')};

  text-decoration: none;
  color: #274060;

  cursor: pointer;
  transition: outline .1s ease;

  &:hover {
    outline: 5px solid #0099FF;
  }
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;

export const Name = styled.span`
  font-size: 18px;
  font-weight: 400;
`;

export const Description = styled.span`
  font-size: 12px;
  font-weight: 400;
`;