import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button/Button';
import { NotFoundSVG } from '../components/NotFoundSVG';

export default function NotFound404() {
  const navigate = useNavigate();

  return (
    <NotFound404Wrapper>
      <span>Oops!</span>
      <h1>Não encontramos esta página</h1>
      <NotFoundSVG />
      <Button
        type="button"
        variant="primary"
        label="Ir para a home"
        onClick={() => navigate('/', { replace: true })}
      />
    </NotFound404Wrapper>
  );
}

const NotFound404Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;

  min-height: 100vh;

  span {
    font-size: 72px;
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
