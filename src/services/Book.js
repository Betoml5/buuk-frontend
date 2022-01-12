import axios from "axios";
import config from "../../config";
const API = `${config.API_URL}/books`;

export const getBestSellers = async () => {
  try {
    const response = await fetch(`${API}/best`);
    const { body } = await response.json();
    return body[0]?.books;
  } catch (error) {
    throw new Error(error);
  }
};

export const searchBook = async (title) => {
  try {
    const response = await axios.get(`${API}/search?title=${title}`);
    return response.data.body;
  } catch (error) {
    throw new Error(error);
  }
};

export const searchBooksBySubjectAPI = async (subject) => {
  try {
    const response = await axios.get(`${API}/search/subject?q=${subject}`);
    return response.data.body;
  } catch (error) {
    throw new Error(error);
  }
};
