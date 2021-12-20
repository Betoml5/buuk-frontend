import axios from "axios";
const API = `http://192.168.1.68:3080/api/v1/users`;


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
}


export const addToLibrary = async (id, workId) => { };
export const removeFromLibrary = async (id, workId) => { };
export const addObjetive = async () => { };

