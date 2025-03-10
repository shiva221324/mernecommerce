import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://mernecommerce-bhsf.onrender.com/api",
  withCredentials: true,
});
