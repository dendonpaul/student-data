import axios from "axios";

const url = "http://localhost:5001";
export const addUser = async (data) => {
  try {
    await axios.post(`${url}/add`, data);
  } catch (e) {
    console.log(e);
  }
};

export const getUsers = async () => {
  try {
    return await axios.get(`${url}/all`);
  } catch (e) {
    console.log(e);
  }
};

export const getUser = async (id) => {
  try {
    return await axios.get(`${url}/user/${id}`);
  } catch (e) {
    console.log(e);
  }
};

export const editUser = async (user, id) => {
  try {
    console.log(user, id);
    return await axios.post(`${url}/${id}`, user);
  } catch (e) {
    console.log(e);
  }
};

export const deleteUser = (id) => {
  try {
    return axios.delete(`${url}/${id}`);
  } catch (e) {
    console.log(e);
  }
};
