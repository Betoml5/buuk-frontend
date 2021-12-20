import axios from "axios";
const API = `http://192.168.1.68:3080/api/v1/books`;

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
