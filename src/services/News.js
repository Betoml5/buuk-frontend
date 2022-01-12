import config from "../../config";
const API = `${config.API_URL}/news`;

export const getBooksNews = async () => {
  try {
    const response = await fetch(`${API}/books`);
    const data = await response.json();
    return data.body.articles;
  } catch (error) {
    return error;
  }
};

export const getAuthorsNews = async () => {
  try {
    const response = await fetch(`${API}/authors`);
    const data = await response.json();
    return data.body.articles;
  } catch (error) {
    return error;
  }
};
