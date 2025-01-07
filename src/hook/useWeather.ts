import { useParams } from "react-router-dom";
import { fetchWeatherDetail } from "../redux/store/slice/weatherDetail";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/store/store";
import { weatherDetails } from "../type/type";
const useWeather = () => {
  const { lats }: { lats?: string } = useParams();
  const [lat, lon] = (lats ?? "").split(",");
  const latitude: number = parseFloat(lat);
  const longitutde: number = parseFloat(lon);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (latitude && longitutde) {
      dispatch(fetchWeatherDetail({ lat: latitude, long: longitutde }));
    }
  }, [latitude, longitutde, dispatch]);
  const detailOfWeather = useAppSelector(
    (state) => state.weatherReview.weatherDetail
  );
  const weatherDetail: weatherDetails | null = detailOfWeather;
  return weatherDetail;
};
export default useWeather;
