import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Home from './views/Home.view';
import NotFound404 from './views/NotFound404.view';
import EditorsListView from './views/EditorsList.view';
import PostCreateView from './views/PostCreate.view';
import EditorProfileView from './views/EditorProfile.view';
import { useEffect, useMemo } from 'react';
import info from '../core/utils/info';
import PostEditView from './views/PostEdit.view';
import AuthorizationService from '../auth/Authorization.service';
import { Authentication } from '../auth/Auth';
import useAuth from '../core/hooks/useAuth';
import jwtDecode from 'jwt-decode';
import Loading from './components/Loading';

const APP_BASE_URL = process.env.REACT_APP_BASE_URL;

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const { fetchUser, user } = useAuth();

  useEffect(() => {
    window.onunhandledrejection = function (error: PromiseRejectionEvent) {
      info({
        title: error.reason.response?.data.title || 'Erro',
        description: error.reason.response?.data.detail || error.reason.message,
      });
    };
  }, []);

  useEffect(() => {
    async function identify() {
      const isInAuthorizationRoute = window.location.pathname === '/authorize';
      const code = new URLSearchParams(window.location.search).get('code');

      const codeVerifier = AuthorizationService.getCodeVerifier();
      const accessToken = AuthorizationService.getAccessToken();

      if (!accessToken && !isInAuthorizationRoute) {
        AuthorizationService.imperativelySendToLoginScreen();
      }

      if (isInAuthorizationRoute) {
        if (!code) {
          info({
            title: 'Erro',
            description: 'Código de autorização não informado',
          });
          AuthorizationService.imperativelySendToLoginScreen();
          return;
        }

        if (!codeVerifier) {
          AuthorizationService.imperativelySendToLogout();
          return;
        }

        const { access_token, refresh_token } =
          await AuthorizationService.getFirstAccessToken({
            code,
            codeVerifier,
            redirectUri: `${APP_BASE_URL}/authorize`,
          });

        AuthorizationService.setAccessToken(access_token);
        AuthorizationService.setRefreshToken(refresh_token);

        const decodedToken: Authentication.AccessTokenDecodedBody =
          jwtDecode(access_token);
        fetchUser(decodedToken['alganews:user_id']);

        navigate('/');
      }

      if (accessToken) {
        const decodedToken: Authentication.AccessTokenDecodedBody =
          jwtDecode(accessToken);
        fetchUser(decodedToken['alganews:user_id']);
      }
    }

    identify();
  }, [navigate, fetchUser]);

  const isAuthorizationRoute = useMemo(
    () => location.pathname === '/authorize',
    [location.pathname]
  );

  if (isAuthorizationRoute || !user) return <Loading show />;

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/editores" element={<EditorsListView />} />
      <Route path="/editores/:id" element={<EditorProfileView />} />
      <Route path="/posts/criar" element={<PostCreateView />} />
      <Route path="/posts/editar/:id" element={<PostEditView />} />
      <Route element={<NotFound404 />} />
    </Routes>
  );
}
