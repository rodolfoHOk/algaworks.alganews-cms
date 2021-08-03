import { transparentize } from "polished";
import styled from "styled-components";


export interface ProgressBarProps {
  title: string;
  progress: number;
  theme: 'default' | 'primary';
  width?: number;
}

export default function ProgressBar({ title, progress, theme, width }: ProgressBarProps) {
  return <ProgressBarWrapper width={width || 296}>
    <BackTitle>{title}</BackTitle>
    <CurrentProgress progress={progress} theme={theme}>
      <span>{title}</span>
    </CurrentProgress>
  </ProgressBarWrapper>
}

const ProgressBarWrapper = styled.div<{ width: number }>`
  width: ${p => p.width}px;
  height: 24px;
  background-color: ${transparentize(0.85, '#274060')};
  font-size: 14px;
  font-weight: 700;
  position: relative;
`;

const BackTitle = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  display: flex;
  align-items: center;
  height: 100%;
  padding-left: 8px;
  overflow: hidden;
  white-space: nowrap;
  color: #274060;
`;

const CurrentProgress = styled.div<{ progress: number, theme: 'default' | 'primary' }>`
  display: flex;
  align-items: center;
  width: ${p => p.progress}%;
  height: 100%;
  background-color: ${p => p.theme === 'primary' ? '#274060' : '#0099FF'};
  overflow: hidden;
  white-space: nowrap;
  color: #FFF;
  span {
    padding-left: 8px;
  }
`;
