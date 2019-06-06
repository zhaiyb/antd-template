/**
 * http请求的统一出口，方便统一处理，暂时透传。
 */
import axios from 'axios';
import { message } from 'antd';

// axios.defaults.headers.common['Authorization'] = localStorage.getItem('token') || '';
// axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.headers.common.timeout = 10000;

// 处理统一处理
axios.interceptors.response.use(response => response.data, (error) => {
  const { response } = error;
  if (response.status === 401) {
    window.location.href = `/login?referrer=${window.location.pathname}`;
  }
  message.error(response.data.message);
  return Promise.reject(response.data);
});

export default axios;
