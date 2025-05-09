import axios from 'axios';

const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL || 'http://192.168.0.100:5000'; // fallback

const api = axios.create({
  baseURL: API_BASE_URL,
});

export default api;
