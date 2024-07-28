import axios from "axios";

const token = localStorage.getItem("token");

const Axios = axios.create({
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
  baseURL:  import.meta.env.VITE_APP_BASE_URL,
});

if (token) {
  Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

// Create a flag to indicate if it's a login attempt
let isLoginRequest = false;

Axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

Axios.interceptors.response.use(

  (response) => response.data,
  (error) => {
    if (error.response.status === 401 && !isLoginRequest) {
      localStorage.removeItem("token");
      window.location.href = "/"; // TODO: globally intercept 401 errors apart from login error
    }
    return Promise.reject(error);
  }
);

export const setLoginRequestFlag = (flag) => {
  isLoginRequest = flag;
};

export default Axios;
