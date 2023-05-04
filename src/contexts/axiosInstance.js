import axios from 'axios'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
    baseURL: 'https://app.salvalucro.com.br/api/v1',
    headers: {
    Authorization: `Bearer ${Cookies.get('access_token')}`
  }
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const response = await axios.post('/refresh_token', {
          refresh_token: Cookies.get('refresh_token')
        });
        Cookies.set('access_token', response.data.access_token);
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${response.data.access_token}`;
        return axiosInstance(originalRequest);
      } catch (err) {
        Cookies.remove('access_token');
        Cookies.remove('refresh_token');
        const navigate = useNavigate()
        navigate('/');
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
