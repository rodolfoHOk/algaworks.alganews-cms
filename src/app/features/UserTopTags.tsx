import styled from "styled-components";
import CircleChart from "../components/CircleChart";

export default function UserTopTags() {
  return <UserTopTagsWrapper>
    <CircleChart progress={81} size={88} theme={'primary'} caption="android" />
    <CircleChart progress={35} size={88} caption="javascript" />
    <CircleChart progress={19} size={88} caption="java" />
  </UserTopTagsWrapper>
}

const UserTopTagsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
`;
