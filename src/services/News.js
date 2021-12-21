const API = `http://192.168.1.117:3080/api/v1/news`;

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
