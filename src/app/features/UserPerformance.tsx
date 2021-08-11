import { useEffect } from "react";
import { useState } from "react";
import withBoundary from "../../core/hoc/withBoundary";
import transformEditorMonthlyEarningsIntoChartJs from "../../core/utils/transformEditorMonthlyEarningsIntoChartJs";
import MetricService from "../../sdk/services/Metric.service";
import Chart, { ChartProps } from "../components/Chart/Chart";

function UserPerformance() {
  const [editorEarnings, setEditorEarnings] = useState<ChartProps['data']>();
  const [error, setError] = useState<Error>();

  useEffect(() => {
    MetricService.getEditorMonthlyEarnings('2022-01')
      .then(transformEditorMonthlyEarningsIntoChartJs)
      .then(setEditorEarnings)
      .catch(error => {
        setError(new Error(error.message));
      });
  }, []);

  if (error)
    throw error;

  if (!editorEarnings)
    return null;

  return <Chart
    title="Média de performance nos últimos 12 meses"
    data={editorEarnings}
  />
}

export default withBoundary(UserPerformance, 'performance');
