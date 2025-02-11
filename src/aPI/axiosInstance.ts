import axios from "axios";

const key = import.meta.env.VITE_API_KEY_VALUE;

const axiosInstance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  params: {
    appid: key,
  },
});

export default axiosInstance;
