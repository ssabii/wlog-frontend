import client from "api";

interface Token {
  accessToken: string;
  refreshToken: string;
  tokenType: string;
}

interface LoginResponse {
  message: string;
  token: Token;
}

const auth = {
  login: (username: string, password: string) =>
    client.post<LoginResponse>("/login", {
      username,
      password,
    }),
  refresh: () => client.post<LoginResponse>("/refresh"),
  logout: () => client.get("/logout"),
  register: (username: string, password: string, displayName: string) =>
    client.post("/register", {
      username,
      password,
      displayName,
    }),
};

export default auth;
