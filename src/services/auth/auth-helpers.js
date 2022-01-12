import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
const TOKEN_KEY = "jwt";

export async function setToken(token) {
  await AsyncStorage.setItem(TOKEN_KEY, token);
}

export async function getToken() {
  const storageJwt = await AsyncStorage.getItem(TOKEN_KEY);
  return storageJwt;
}

export async function deleteToken() {
  await AsyncStorage.removeItem(TOKEN_KEY);
}

export function initAxiosInterceptors() {
  axios.interceptors.request.use(async function (config) {
    const token = await getToken();
    if (token) {
      config.headers.Authorization = `bearer ${token}`;
    }
    return config;
  });

  axios.interceptors.response.use(
    function (response) {
      // Do something with response data
      return response;
    },
    function (error) {
      // Do something with response error

      if (
        error.response.data.error === "jwt expired" &&
        error.response.status === 401
      ) {
      }
      console.log(error.response.data.error);
      console.log(error.response.status);
      return Promise.reject(error);
    }
  );
}
