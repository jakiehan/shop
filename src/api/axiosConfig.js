import axios from 'axios';
import { BASE_URL, popupSelectors } from '../utils/constants.js';
import Popup from '../components/Popup.js';

const popup = new Popup(popupSelectors.popup);

export const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

client.interceptors.response.use(
  response => response,
  (err) => {
    popup.open(err.message);
    return Promise.reject(err);
  });

  popup.setEventListeners();