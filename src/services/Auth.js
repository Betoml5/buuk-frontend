import axios from "axios";
const API = `http://192.168.1.64:3080/api/v1/auth`;
import AsyncStorage from "@react-native-async-storage/async-storage";

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
