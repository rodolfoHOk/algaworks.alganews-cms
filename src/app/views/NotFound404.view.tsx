import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import notFound from '../../assets/not_found.svg';
import Button from '../components/Button/Button';

export default function NotFound404() {
  const history = useHistory();

  return <NotFound404Wrapper>
    <span>
      Oops!
    </span>
    <h1>Não encontramos esta página</h1>
    <img src={notFound} alt="Não encontrado" />
    <Button
      type="button"
      variant="primary"
      label="Ir para a home"
      onClick={() => history.replace('/')}
    />
  </NotFound404Wrapper>
}

const NotFound404Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;

  min-height: 100vh;

  span { 
    font-size: 72px
  }

  h1 {
    font-size: 18px;
    font-weight: 400;
  }

  img {
    width: 428px;
    height: 319px;
  }
`;
