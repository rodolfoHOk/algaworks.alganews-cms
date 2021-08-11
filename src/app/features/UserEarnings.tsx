import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { User } from "../../sdk/@types";
import UserService from "../../sdk/services/User.service";
import ValueDescriptor from "../components/ValueDescriptor/ValueDescriptor";

export default function UserEarnings() {
  const [user, setUser] = useState<User.Detailed>();

  useEffect(() => {
    UserService.getDetailedUser(7)
      .then(setUser);
  }, []);

  if (!user)
    return null;

  return <UserEarningsWrapper>
    <ValueDescriptor description={'ganhos no mês'} value={user.metrics.monthlyEarnings} color={'default'} isCurrency />
    <ValueDescriptor description={'ganhos na semana'} value={user.metrics.weeklyEarnings} color={'default'} isCurrency />
    <ValueDescriptor description={'ganhos de sempre'} value={user.metrics.lifetimeEarnings} color={'primary'} isCurrency />
    <ValueDescriptor description={'total de palavras'} value={user.metrics.lifetimeWords} color={'primary'} />
  </UserEarningsWrapper>
}

const UserEarningsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;
