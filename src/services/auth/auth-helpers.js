import AsyncStorage from "@react-native-async-storage/async-storage";
import Axios from "axios";
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
  console.log("init Axios interceptors");
  Axios.interceptors.request.use(async function (config) {
    const token = await getToken();
    if (token) {
      config.headers.Authorization = `bearer ${token}`;
    }
    return config;
  });
}
