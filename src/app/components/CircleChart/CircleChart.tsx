import { useEffect, useState } from 'react';
import * as CC from './CircleChart.styles';

export interface CircleChartProps {
  size: number;
  progress: number;
  caption?: string;
  theme?: 'default' | 'primary';
  strokeWidth?: number;
}

export default function CircleChart(props: CircleChartProps) {
  // função que recupera a cor do chart com base no tema
  const getThemeColor = () =>
    props.theme === 'primary' ? '#0099FF' : '#274060';

  // setup (configurações de cor, borda, etc.)
  const THEME = getThemeColor();
  const STROKE_WIDTH = props.strokeWidth || 8;
  const STROKE_COLOR = THEME;

  // cálculos
  const CENTER = props.size / 2;
  const RADIUS = props.size / 2 - STROKE_WIDTH / 2;
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

  // estado de offset
  const [offset, setOffSet] = useState(CIRCUMFERENCE);

  // observador para animar o offset
  useEffect(() => {
    const progressOffset = ((100 - props.progress) / 100) * CIRCUMFERENCE;
    setOffSet(progressOffset);
  }, [CIRCUMFERENCE, props.progress, setOffSet, offset]);

  return (
    <CC.Wrapper>
      <CC.SvgWrapper style={{ width: props.size, height: props.size }}>
        <CC.Svg width={props.size} height={props.size}>
          <CC.CircleBg cy={CENTER} cx={CENTER} r={RADIUS} />
          <CC.Circle
            fill="none"
            cy={CENTER}
            cx={CENTER}
            r={RADIUS}
            stroke={STROKE_COLOR}
            strokeWidth={STROKE_WIDTH}
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={offset}
          />
        </CC.Svg>
        <CC.Percentage color={THEME}>
          {Math.ceil(props.progress)}%
        </CC.Percentage>
      </CC.SvgWrapper>
      {props.caption && <CC.Caption color={THEME}>{props.caption}</CC.Caption>}
    </CC.Wrapper>
  );
}
