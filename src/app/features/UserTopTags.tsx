import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Metric } from "../../sdk/@types";
import MetricService from "../../sdk/services/Metric.service";
import CircleChart from "../components/CircleChart";

export default function UserTopTags() {
  const [topTags, setTopTags] = useState<Metric.EditorTagRatio>();

  useEffect(() => {
    MetricService.getTop3Tags()
      .then(setTopTags);
  }, []);

  if (!topTags)
    return null;

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
