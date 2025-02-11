// apiService.ts
import axiosInstance from "./axiosInstance";

export const getCityDetail = async (lat: number, lon: number) => {
  try {
    const response = await axiosInstance.get("/forecast", {
      params: {
        lat,
        lon,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to Fetch City Detail");
  }
};
