import axios from "axios";

const axiosCityInstance = axios.create({
  baseURL: "https://api.openweathermap.org",
  params: {
    appid: import.meta.env.VITE_API_KEY_VALUE,
  },
});

export default axiosCityInstance;
