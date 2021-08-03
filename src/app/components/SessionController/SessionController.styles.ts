import { transparentize } from "polished";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  padding: 20px;
  border: 1px solid ${transparentize(0.90, '#274060')};

  text-decoration: none;
  color: #274060;

  cursor: pointer;
  transition: outline .1s ease;
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
`;

export const Name = styled.h2`
  font-size: 18px;
  font-weight: 400;

  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Description = styled.span`
  font-size: 12px;
  font-weight: 400;
`;
