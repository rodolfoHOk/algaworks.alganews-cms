import styled from "styled-components";
import ValueDescriptor from "../components/ValueDescriptor/ValueDescriptor";

export default function UserEarnings() {
  return <UserEarningsWrapper>
    <ValueDescriptor description={'ganhos no mês'} value={560322.02} color={'default'} isCurrency />
    <ValueDescriptor description={'ganhos na semana'} value={560322.02} color={'default'} isCurrency />
    <ValueDescriptor description={'ganhos de sempre'} value={560322.02} color={'primary'} isCurrency />
    <ValueDescriptor description={'total de palavras'} value={4312410} color={'primary'} />
  </UserEarningsWrapper>
}

const UserEarningsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;
