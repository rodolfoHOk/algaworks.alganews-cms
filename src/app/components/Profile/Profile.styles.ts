import { transparentize } from 'polished';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled(Link)`
  display: flex;
  align-items: center;
  gap: 24px;

  padding: 16px;
  border: 1px solid ${transparentize(0.90, '#274060')};

  text-decoration: none;
  color: #274060;

  cursor: pointer;
  transition: box-shadow .15s ease;

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 0 5px #09f;
    border-color: #09f;
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