import styled from 'styled-components';
// import { Wrapper as Button } from '../Button/Button.styles';

export const Wrapper = styled.div``;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 12px;

  background-color: #09F;
  color: #FFF;

  padding: 24px;

  cursor: pointer;
`;

export const Input = styled.input`
  display:none;
`;

export const ImagePreview = styled.div<{ preview: string }>`
  height: 100%;
  background-image: url(${p => p.preview});
  background-position: center;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-image: linear-gradient(rgba(39, 64, 96, 0.6), rgba(39, 64, 96, 0.6)), url(${p => p.preview});
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;

  background-color: #FFF;
  padding: 16px;
  
  color: #274060;
  font-size: 18px;
  font-weight: 400;
  
  border: none;
`;

export const ImagePreviewWrapper = styled.div`
  background-color: #274060;
  height: 240px;

  ${Button} {
    display: none;
  }

  &:hover {
    ${Button} {
      display: flex;
    }
  }
`;
