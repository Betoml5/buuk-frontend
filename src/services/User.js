import axios from "axios";
import config from "../../config";
const API = `${config.API_URL}/users`;

export const signup = async (user) => {
  try {
    const response = await axios.post(`${API}/create`, { user: user });
    return response.data;
  } catch (error) {
    return error.response.data.error.message;
  }
};
export const signin = async (user) => {
  try {
    const response = await axios.post(`${API}/login`, user);

    return response.data.body;
  } catch (error) {
    return error.response.data.error.message;
  }
};

export const findOne = async (id) => {
  try {
    const response = await axios.get(`${API}/user/${id}`);
    return response.data;
  } catch (error) {
    return error.response.data.error.message;
  }
};

export const updateAPI = async (id, user) => {
  try {
    const response = await axios.put(`${API}/update/${id}`, { user: user });
    return response.data;
  } catch (error) {
    return error.response.data.error.message;
  }
};

export const addToLibraryAPI = async (id, bookId) => {
  try {
    const response = await axios.post(`${API}/library/${id}?bookId=${bookId}`);
    return response.data;
  } catch (error) {
    console.log(error.response.data.error.message);
    return error.response.data.error.message;
  }
};
export const removeFromLibraryAPI = async (id, bookId) => {
  try {
    const response = await axios.delete(
      `${API}/library/${id}?bookId=${bookId}`
    );
    return response.data;
  } catch (error) {
    return error.response.data.error.message;
  }
};

export const addItemToTimelineAPI = async (id, item) => {
  try {
    const response = await axios.patch(`${API}/timeline/${id}`, { item: item });
    return response.data;
  } catch (error) {
    console.log(error);
    return error.response.data.error.message;
  }
};
