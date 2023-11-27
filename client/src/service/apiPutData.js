import { address_url } from './url';
import axios from 'axios';

export const putData = async (endpoint, name, updatedPost) => {
  try {
    const response = await axios.put(`${address_url}/${endpoint}/${name}`, updatedPost);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
