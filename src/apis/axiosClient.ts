import axios from "axios";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_CMS_URL,
});

// Interceptors
// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    if (config.data instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    } else if (
      config.url?.includes("download") ||
      config.url?.includes("download-multiple") ||
      config.url?.includes("read")
    ) {
      config.responseType = "blob";
    } else {
      config.headers["Content-Type"] = "application/json";
    }

    config.headers["Authorization"] = `users API-Key ${
      import.meta.env.VITE_CMS_API_KEY
    }`;

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosClient;
