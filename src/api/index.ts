import axios, { AxiosError } from "axios";

import config from "config";

const client = axios.create({
  baseURL: config.api.baseURL,
});

client.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.data) {
      return Promise.reject(new Error(error.response.data));
    }

    if (error.message === "Network Error") {
      return Promise.reject(new Error("네트워크 오류가 발생했습니다."));
    }

    return Promise.reject(new Error("클라이언트에서 오류가 발생했습니다."));
  },
);

export const setHeaders = (accessToken: string, refreshToken: string) => {
  client.defaults.headers.common.Authorization = accessToken;
  client.defaults.headers.common.Refresh = refreshToken;
};

export const removeHeaders = () => {
  delete client.defaults.headers.common.Authorization;
  delete client.defaults.headers.common.Refresh;
};

export default client;
