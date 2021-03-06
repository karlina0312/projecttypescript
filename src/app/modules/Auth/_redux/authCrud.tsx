import axios from "axios";

export const LOGIN_URL = "api/auth/login";
export const REGISTER_URL = "api/auth/register";
export const REQUEST_PASSWORD_URL = "api/auth/forgot-password";

export const ME_URL = "api/me";

export function login(email: any, password: string) {
  return axios.post(LOGIN_URL, { email, password });
}

export function register(email: any, fullname: string, username: string, password: string) {
  return axios.post(REGISTER_URL, { email, fullname, username, password });
}

export function requestPassword(email: string) {
  return axios.post(REQUEST_PASSWORD_URL, { email });
}

export function getUserByToken() {
  // Authorization head should be fulfilled in interceptor.
  return axios.get(ME_URL);
}
