// services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL || 'http://192.168.0.101:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});
console.log('API BASE URL:', process.env.EXPO_PUBLIC_API_URL);
export default api;
