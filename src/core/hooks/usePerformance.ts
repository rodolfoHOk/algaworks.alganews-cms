import { useCallback, useState } from "react";
import { MetricService } from "rodolfohiok-sdk";
import { ChartProps } from "../../app/components/Chart/Chart";
import transformEditorMonthlyEarningsIntoChartJs from "../utils/transformEditorMonthlyEarningsIntoChartJs";

export default function usePerformance() {
  const [performance, setPerformance] = useState<ChartProps['data']>();

  const fetchPerformance = useCallback(async function () {
    MetricService.getEditorMonthlyEarnings()
      .then(transformEditorMonthlyEarningsIntoChartJs)
      .then(setPerformance);
  },[]);

  return {
    performance,
    fetchPerformance,
  }
}
