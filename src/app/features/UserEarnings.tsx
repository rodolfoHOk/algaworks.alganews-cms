import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components';
import useAuth from '../../core/hooks/useAuth';
import ValueDescriptor from '../components/ValueDescriptor/ValueDescriptor';

export default function UserEarnings() {
  const { user } = useAuth();

  if (!user)
    return (
      <UserEarningsWrapper style={{ height: 123 }}>
        <Skeleton height={40} width={150} />
        <Skeleton height={40} width={150} />
        <Skeleton height={40} width={150} />
        <Skeleton height={40} width={150} />
      </UserEarningsWrapper>
    );

  return (
    <UserEarningsWrapper>
      <ValueDescriptor
        description={'ganhos no mês'}
        value={user.metrics.monthlyEarnings}
        color={'default'}
        isCurrency
      />
      <ValueDescriptor
        description={'ganhos na semana'}
        data-testid={'weeklyEarnings'}
        value={user.metrics.weeklyEarnings}
        color={'default'}
        isCurrency
      />
      <ValueDescriptor
        description={'ganhos de sempre'}
        value={user.metrics.lifetimeEarnings}
        color={'primary'}
        isCurrency
      />
      <ValueDescriptor
        description={'total de palavras'}
        value={user.metrics.lifetimeWords}
        color={'primary'}
      />
    </UserEarningsWrapper>
  );
}

const UserEarningsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;
