import axios from "axios";
const API = `${config.API_URL}/auth`;
import config from "../../config";

export const getNewTokenAPI = async (refreshToken) => {
  try {
    const response = await axios.post(`${API}/refresh-token`, {
      refreshToken: refreshToken,
    });

    return response.data.body;
  } catch (error) {
    throw new Error(error);
  }
};

export const sendRecoveryEmailAPI = async (email) => {
  try {
    const response = await axios.post(`${API}/forgot-password`)
  } catch (error) {

  }
}
