import axios from 'axios';
import { BASE_URL } from '@utils/constants.js';
import Popup from '@components/Popup';

const popup = new Popup();

export const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

client.interceptors.response.use(
  response => response,
  (err) => {
    popup.show(err.message);
    console.log(err);
  });
