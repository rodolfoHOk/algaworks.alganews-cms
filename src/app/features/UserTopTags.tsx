import { useEffect } from "react";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import { Metric } from "../../sdk/@types";
import MetricService from "../../sdk/services/Metric.service";
import CircleChart from "../components/CircleChart";

export default function UserTopTags() {
  const [topTags, setTopTags] = useState<Metric.EditorTagRatio>();
  const [error, setError] = useState<Error>();

  useEffect(() => {
    MetricService.getTop3Tags()
      .then(setTopTags)
      .catch(error => setError(new Error(error.message)));;
  }, []);

  if (error)
    throw error;

  if (!topTags)
    return <UserTopTagsWrapper>
      <Skeleton circle height={88} width={88} />
      <Skeleton circle height={88} width={88} />
      <Skeleton circle height={88} width={88} />
    </UserTopTagsWrapper>;

  return <UserTopTagsWrapper>
    {
      topTags?.map((tag, index) => {
        return <CircleChart
          key={index}
          progress={tag.percentage}
          size={88}
          theme={index === 0 ? 'primary' : 'default'}
          caption={tag.tagName}
        />
      })
    }
  </UserTopTagsWrapper>
}

const UserTopTagsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
`;
