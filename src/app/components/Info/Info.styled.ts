import { transparentize } from "polished";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background-color: #F3F8FA;
  width: 373px;
  border: 1px solid ${transparentize(0.9, '#274060')};
`;

export const InnerContent = styled.div`
  display: flex;
  gap: 24px;
  color: #274060;
`;

export const InfoIcon = styled.div``;

export const Messages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  p { 
    font-size: 14px;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 500;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  line-clamp: 1;
  overflow: hidden;
`;
