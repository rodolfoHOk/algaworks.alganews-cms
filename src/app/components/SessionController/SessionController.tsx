import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useCallback } from 'react';
import Skeleton from 'react-loading-skeleton';
import AuthorizationService from '../../../auth/Authorization.service';
import useAuth from '../../../core/hooks/useAuth';
import Button from '../Button/Button';
import * as SC from './SessionController.styles';
import confirm from '../../../core/utils/confirm';

export interface SessionControllerProps {
  name?: string;
  description?: string;
  avatar?: string;
  onLogout?: () => void;
}

export default function SessionController(props: SessionControllerProps) {
  const { user } = useAuth();

  const logout = useCallback(() => {
    confirm({
      title: 'Deseja sair?',
      onConfirm: AuthorizationService.imperativelySendToLogout,
    });
  }, []);

  if (!user) return <Skeleton height={215} />;

  return (
    <SC.Wrapper>
      <SC.Avatar src={user.avatarUrls.small} alt={user.name} />
      <SC.Name>{user.name}</SC.Name>
      <SC.Description>
        Editor desde{' '}
        <strong>
          {format(parseISO(user.createdAt), "MMM 'de' yyyy", { locale: ptBR })}
        </strong>
      </SC.Description>
      <Button variant="danger" label="logout" onClick={logout} />
    </SC.Wrapper>
  );
}
