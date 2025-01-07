import axios from "axios";
export const getcity = async (city: string) => {
  const key = import.meta.env.VITE_API_KEY_VALUE;
  try {
    const cityData = await axios.get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=3&appid=${key}`
    );

    return cityData.data;
  } catch (error) {
    throw new Error(`Failed to fetch city data,${error}`);
  }
};
