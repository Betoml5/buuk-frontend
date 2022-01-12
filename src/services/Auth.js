import axios from "axios";
const API = `${config.API_URL}/auth`;
import AsyncStorage from "@react-native-async-storage/async-storage";
import config from "../../config";

export const getNewToken = async () => {
  const refreshToken = await AsyncStorage.getItem("refres-jwt");

  if (!refreshToken) {
    throw new Error("Need refresh token");
  }

  try {
    const response = await axios.post(`${API}/refresh-token`, refreshToken);
    return response.data.body.token;
  } catch (error) {
    console.log(error);
  }
};
