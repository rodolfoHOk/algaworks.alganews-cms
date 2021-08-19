import { useEffect } from "react";
import { useState } from "react";
import withBoundary from "../../core/hoc/withBoundary";
import Chart from "../components/Chart/Chart";
import Skeleton from "react-loading-skeleton";
import usePerformance from "../../core/hooks/usePerformance";

function UserPerformance() {
  const { performance, fetchPerformance } = usePerformance();
  const [error, setError] = useState<Error>();

  useEffect(() => {
    fetchPerformance()
      .catch(error => {
        setError(new Error(error.message));
      });
  }, [fetchPerformance]);

  if (error)
    throw error;

  if (!performance)
    return <div>
      <Skeleton height={227} />
    </div>

  return <Chart
    title="Média de performance nos últimos 12 meses"
    data={performance}
  />
}

export default withBoundary(UserPerformance, 'performance');
