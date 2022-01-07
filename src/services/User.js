import axios from "axios";
const API = `http://192.168.1.64:3080/api/v1/users`;

export const signup = async (user) => {
  try {
    const response = await axios.post(`${API}/create`, user);
    return response;
  } catch (error) {
    return error;
  }
};
export const signin = async (user) => {
  try {
    const response = await axios.post(`${API}/login`, user);
    return response.data.body;
  } catch (error) {
    return error;
  }
};

export const findOne = async (id) => {
  try {
    const response = await axios.get(`${API}/user/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const updateAPI = async (id, user) => {
  try {
    const response = await axios.put(`${API}/update/${id}`, { user: user });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const addToLibraryAPI = async (id, bookId) => {
  try {
    const response = await axios.post(`${API}/library/${id}?bookId=${bookId}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const removeFromLibraryAPI = async (id, bookId) => {
  try {
    const response = await axios.delete(
      `${API}/library/${id}?bookId=${bookId}`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const addItemToTimelineAPI = async (id, item) => {
  try {
    const response = await axios.patch(`${API}/timeline/${id}`, { item: item });
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const addObjetive = async () => {};
