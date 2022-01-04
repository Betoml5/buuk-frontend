import Axios from "axios";
const TOKEN_KEY = "jwt";
const API = `http://192.168.1.64:3080/api/v1`;

export function setToken(token) {
  window.localStorage.setItem(TOKEN_KEY, token);
}

export function getToken() {
  return window.localStorage.getItem(TOKEN_KEY);
}

export function deleteToken() {
  window.localStorage.removeItem(TOKEN_KEY);
}

export function initAxiosInterceptors() {
  Axios.interceptors.request.use(function (config) {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `bearer ${token}`;
    }
    return config;
  });
}

export async function authFacebookAPI() {
  try {
    const response = await Axios.get(`${API}/auth/facebook`);
    console.log(response.data);
    console.log(response.request);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
