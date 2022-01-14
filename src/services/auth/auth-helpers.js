import AsyncStorage from "@react-native-async-storage/async-storage";
import { getNewTokenAPI } from "../../services/Auth";
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

export async function getRefreshTokenFromStorage() {
  const storageRefreshToken = await AsyncStorage.getItem("refresh-jwt");
  return storageRefreshToken;
}

export function initAxiosInterceptors() {
  axios.interceptors.request.use(async function (config) {
    const token = await getToken();
    if (token) {
      config.headers.Authorization = `bearer ${token}`;
    }
    return config;
  });

  const getNewToken = async () => {
    try {
      const refreshToken = await AsyncStorage.getItem("refresh-jwt");
      const response = await getNewTokenAPI(refreshToken);
      const newToken = response.token;
      const user = response.user;
      await AsyncStorage.setItem("jwt", newToken);
      await AsyncStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      throw new Error(error);
    }
  };

  axios.interceptors.response.use(
    function (response) {
      // Do something with response data

      return response;
    },
    function (error) {
      console.log(error);
      // Do something with response error
      if (
        error.response.data.error === "jwt expired" &&
        error.response.status === 401
      ) {
        getNewToken();
      }

      return Promise.reject(error);
    }
  );
}
