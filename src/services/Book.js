import axios from "axios";
const API = `http://192.168.1.70:3080/api/v1/books`;

export const getBestSellers = async () => {
  try {
    const response = await fetch(`${API}/best`);
    const { body } = await response.json();
    return body[0]?.books;
  } catch (error) {
    console.log(error);
  }
};

export const searchBook = async (title) => {
  try {
    const response = await axios.get(`${API}/search?title=${title}`);
    return response.data.body;
  } catch (error) {
    throw error;
  }
};

export const searchBooksBySubjectAPI = async (subject) => {
  try {
    const response = await axios.get(`${API}/search/subject?q=${subject}`);
    return response.data.body;
  } catch (error) {
    throw error;
  }
};
