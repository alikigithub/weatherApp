import axios from "axios";
const key = import.meta.env.VITE_API_KEY_VALUE;
export const getCityDetail = async (lat: number, lon: number) => {
  try {
    console.log(lat, lon);
    const cityDetail = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}`
    );
    return cityDetail.data;
  } catch (error) {
    throw new Error(`Failed to Fetch City Detail  ${error} `);
  }
};
