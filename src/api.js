import axios from 'axios';

const API_URL = "http://localhost:3001/api";

export const startBot = () => axios.post(`${API_URL}/start`);
export const stopBot = () => axios.post(`${API_URL}/stop`);
export const fetchTradeHistory = () => axios.get(`${API_URL}/trades`);