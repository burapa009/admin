import axios from 'axios';

// กำหนด backendUrl จาก environment variable
const backendUrl = 'https://artnakk-backend-10.onrender.com';

const api = axios.create({
  baseURL: backendUrl,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add request interceptor
api.interceptors.request.use((config) => {
  // เปลี่ยน endpoint สำหรับ login
  if (config.url === '/auth/login') {
    config.url = '/api/user/login';
  }
  
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Add response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.reload();
    }
    return Promise.reject(error);
  }
);

export default api; 