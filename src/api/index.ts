import axios from "axios";

import config from "config";

const client = axios.create({
  baseURL: config.api.basePath,
});

export const setHeaders = (accessToken: string, refreshToken: string) => {
  client.defaults.headers.common.Authorization = accessToken;
  client.defaults.headers.common.Refresh = refreshToken;
};

export const removeHeaders = () => {
  delete client.defaults.headers.common.Authorization;
  delete client.defaults.headers.common.Refresh;
};

export default client;
