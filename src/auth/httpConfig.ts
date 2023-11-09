import axios from 'axios';
import Service from 'rodolfohiok-sdk/dist/Service';
import AuthorizationService from './Authorization.service';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
if (API_BASE_URL) Service.setBaseUrl(API_BASE_URL);

Service.setRequestInterceptors(async (request) => {
  const accessToken = AuthorizationService.getAccessToken();

  if (accessToken) {
    request.headers!['Authorization'] = `Bearer ${accessToken}`;
  }

  return request;
});

let isRefreshing: boolean = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((promise) => {
    if (error) {
      promise.reject(error);
    } else {
      promise.resolve(token);
    }
  });

  failedQueue = [];
};

Service.setResponseInterceptors(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error?.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers['Authorization'] = 'Bearer ' + token;
            return axios(originalRequest);
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      const storage = {
        codeVerifier: AuthorizationService.getCodeVerifier(),
        refreshToken: AuthorizationService.getRefreshToken(),
      };
      const { codeVerifier, refreshToken } = storage;

      if (!refreshToken || !codeVerifier) {
        AuthorizationService.imperativelySendToLogout();
        return;
      }

      try {
        const tokens = await AuthorizationService.getNewToken({
          refreshToken,
          codeVerifier,
        });

        AuthorizationService.setAccessToken(tokens.access_token);
        AuthorizationService.setRefreshToken(tokens.refresh_token);

        originalRequest.headers[
          'Authorization'
        ] = `Bearer ${tokens.access_token}`;

        processQueue(null, tokens.access_token);

        return axios(originalRequest);
      } catch (err) {
        processQueue(err, null);
        throw err;
      } finally {
        isRefreshing = false;
      }
    }

    throw error;
  }
);
