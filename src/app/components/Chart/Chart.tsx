import { transparentize } from 'polished';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';
import NoData from '../NoData/NoData';
import Heading from '../Typography/Heading';
import {
  Chart as ChartJs,
  ChartData,
  ChartOptions,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend,
} from 'chart.js';
import { Tooltip } from 'chart.js';

const options: ChartOptions<'line'> = {
  maintainAspectRatio: true,
  elements: {
    line: {
      tension: 0,
    },
  },
  plugins: {
    legend: {
      position: 'bottom',
      align: 'center',
      labels: {
        usePointStyle: true,
      },
    },
  },
  scales: {
    xAxes: {
      display: true,
      grid: {
        display: false,
      },
    },
    yAxes: {
      type: 'linear',
      display: false,
      position: 'left',
    },
  },
};

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export interface ChartProps {
  title: string;
  data: ChartData<'line'>;
}

export default function Chart({ title, data }: ChartProps) {
  console.log(data);
  return (
    <ChartWrapper style={{ width: '100%' }}>
      <div style={{ marginBottom: 16 }}>
        <Heading level={3}>{title}</Heading>
      </div>
      {data ? (
        <Line
          typeof="line"
          height={139}
          width={600}
          data={data}
          options={options}
        />
      ) : (
        <NoData height={139} />
      )}
    </ChartWrapper>
  );
}

const ChartWrapper = styled.div`
  text-align: center;
  border: 1px solid ${transparentize(0.9, '#274060')};
  padding: 20px;
`;
