import axios from "axios";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_GATEWAY_URL,
  auth: {
    username: import.meta.env.VITE_BASIC_AUTH_USERNAME,
    password: import.meta.env.VITE_BASIC_AUTH_PASSWORD
  }
});

// Interceptors
// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    if (config.data instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    } else {
      config.headers["Content-Type"] = "application/json";
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosClient;
