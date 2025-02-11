// apiService.ts
import axiosCityInstance from "./axiosCityInstance";
export const getcity = async (city: string) => {
  try {
    const response = await axiosCityInstance.get("/geo/1.0/direct", {
      params: {
        q: city, // City name
        limit: 3, // Limit to 3 results
      },
    });

    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch city data, ${error}`);
  }
};
