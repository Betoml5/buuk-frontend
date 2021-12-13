const API = `http://192.168.1.64:3080/api/v1/books`;

export const getBestSellers = async () => {
  try {
    const response = await fetch(`${API}/best`);
    const { body } = await response.json();

    return body[0]?.books;
  } catch (error) {
    console.log(error);
  }
};
