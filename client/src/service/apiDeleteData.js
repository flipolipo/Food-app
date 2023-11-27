import axios from 'axios';
import { address_url } from './url';

export const deleteData = async (endpoint, name) => {
  try {
    const response = await axios.delete(`${address_url}/${endpoint}/${name}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
