import axios from "axios";

const URL =' http://localhost:3000';


export const getUsers = async () => {
  try {
    const response = axios.get(`${URL}/users`);
    return response;

  } catch (error) {
    console.log(error);
  }  
}
export const getOnlyUser = async (id) => {
  try {
    const response = axios.get(`${URL}/users/${id}`);
    return response;

  } catch (error) {
    console.log(error);
  }  
}

export const getLogin= async() =>{
  try {
    const response = axios.get(`${URL}/auth`);
    return response;

  } catch (error) {
    console.log(error);
  }
}
export const addUser= async(datos) =>{
  try {
    const response = axios.post(`${URL}/users`, datos);
    return response;

  } catch (error) {
    console.log(error);
  }
}
export const deleteUser =async (id) =>{
  try {
    const response = axios.delete(`${URL}/users/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
}
export const editUser =async (datos) =>{
  
  console.log(datos);
  try {
    const response = axios.put(`${URL}/users/${datos.id}`, datos);
    return response;
  } catch (error) {
    console.log(error);
  }
}