import axios from 'axios';
import { REFRESH_TOKEN } from '../api/constants';

// Get token from localStorage
const getToken = (name) => {
  return localStorage.getItem(name);
};

// Default headers function
const getDefaultHeaders = () => {
  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${getToken('access_token')}`,
  };
};

// Flag to prevent multiple refresh attempts
let isRefreshing = false;
let failedQueue = [];

// Function to process queued requests after token is refreshed
const processQueue = (error, token = null) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

// Create Axios instance
const apiClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL, // Your API base URL
  headers: getDefaultHeaders(),
  withCredentials: true, // Allows sending cookies with requests
});

// Request Interceptor: Attach token to every request
apiClient.interceptors.request.use(config => {
  const accessToken = getToken('access_token');
  if (accessToken) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

// Response Interceptor: Handle 401 (Unauthorized) errors
apiClient.interceptors.response.use(
  (response) => response, // Forward successful responses
  async (error) => {
    const originalRequest = error.config;

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      if (!isRefreshing) {
        isRefreshing = true;
        originalRequest._retry = true;

        try {
          // Request a new access token using the refresh token
          const refreshToken = getToken('refresh_token');
          const response = await axios.post(REFRESH_TOKEN, { refresh: refreshToken });

          // Store new tokens in localStorage
          const newAccessToken = response.data.access;
          localStorage.setItem('access_token', newAccessToken);
          localStorage.setItem('refresh_token', response.data.refresh);

          // Retry the original request with the new access token
          apiClient.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
          processQueue(null, newAccessToken);
          return apiClient(originalRequest);

        } catch (refreshError) {
          // Token refresh failed, handle accordingly (e.g., log out)
          processQueue(refreshError, null);
          return Promise.reject(refreshError);
        } finally {
          isRefreshing = false;
        }
      }

      // Queue failed requests until the refresh token is obtained
      return new Promise((resolve, reject) => {
        failedQueue.push({ resolve, reject });
      }).then(token => {
        originalRequest.headers['Authorization'] = `Bearer ${token}`;
        return apiClient(originalRequest);
      }).catch(err => {
        return Promise.reject(err);
      });
    }

    return Promise.reject(error); // For non-401 errors
  }
);

// Request utility methods for HTTP verbs
const request = async (method, url, data = {}, customHeaders = {}) => {
  const headers = { ...getDefaultHeaders(), ...customHeaders };

  const config = {
    method: method.toUpperCase(),
    url,
    headers,
    data,
    withCredentials: true,
  };

  if (method.toUpperCase() === 'GET' || method.toUpperCase() === 'DELETE') {
    config.params = data;
  } else {
    config.data = data;
  }

  try {
    const response = await apiClient(config);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

// HTTP verb-specific methods
request.get = (url, params = {}, customHeaders = {}) => {
  return request('GET', url, params, customHeaders);
};

request.post = (url, data = {}, customHeaders = {}) => {
  return request('POST', url, data, customHeaders);
};

request.put = (url, data = {}, customHeaders = {}) => {
  return request('PUT', url, data, customHeaders);
};

request.patch = (url, data = {}, customHeaders = {}) => {
  return request('PATCH', url, data, customHeaders);
};

request.delete = (url, data = {}, customHeaders = {}) => {
  return request('DELETE', url, data, customHeaders);
};

export default request;
