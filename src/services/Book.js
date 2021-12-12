const API = `http://192.168.1.64:3080/api/v1/books`;

export const getBestSellers = async () => {
  try {
    const response = await fetch(`${API}/best`);
    const data = await response.json();

    return data.body;
  } catch (error) {
    console.log(error);
  }
};
