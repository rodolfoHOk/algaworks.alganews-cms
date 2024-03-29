import { ChartProps } from '../../app/components/Chart/Chart';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Metric } from 'rodolfohiok-sdk';

function transformEditorMonthlyEarningsIntoChartJs(
  editorEarnings: Metric.EditorMonthlyEarnings
): ChartProps['data'] {
  const labels: string[] = [];
  const editorData: number[] = [];
  const platformAverageData: number[] = [];

  editorEarnings.forEach((earning) => {
    const formattedMonth = format(parseISO(earning.yearMonth), 'MMMM', {
      locale: ptBR,
    });
    labels.push(formattedMonth);
    editorData.push(earning.totalAmount);
    platformAverageData.push(earning.totalPlatformAverageAmount);
  });

  return {
    labels,
    datasets: [
      {
        label: 'Performance pessoal',
        data: editorData,
        fill: true,
        backgroundColor: '#0099FF',
        borderColor: '#0099FF',
        borderWidth: 0.5,
      },
      {
        label: 'Performance média do time',
        data: platformAverageData,
        fill: true,
        backgroundColor: '#274060',
        borderColor: '#274060',
        borderWidth: 0.5,
      },
    ],
  };
}

export default transformEditorMonthlyEarningsIntoChartJs;
