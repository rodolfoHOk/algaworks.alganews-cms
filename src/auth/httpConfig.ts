import axios from 'axios';
import Service from 'rodolfohiok-sdk/dist/Service';
import AuthorizationService from './Authorization.service';

Service.setRequestInterceptors(async (request) => {
  const accessToken = AuthorizationService.getAccessToken();

  if (accessToken) {
    request.headers['Authorization'] = `Bearer ${accessToken}`;
  }

  return request;
});

Service.setResponseInterceptors(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error?.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const storage = {
        codeVerifier: AuthorizationService.getCodeVerifier(),
        refreshToken: AuthorizationService.getRefreshToken(),
      };
      const { codeVerifier, refreshToken } = storage;

      if (!refreshToken || !codeVerifier) {
        AuthorizationService.imperativelySendToLogout();
        return;
      }

      const tokens = await AuthorizationService.getNewToken({
        refreshToken,
        codeVerifier,
      });

      AuthorizationService.setAccessToken(tokens.access_token);
      AuthorizationService.setRefreshToken(tokens.refresh_token);

      originalRequest.headers[
        'Authorization'
      ] = `Bearer ${tokens.access_token}`;

      return axios(originalRequest);
    }

    return Promise.reject(error);
  }
);
