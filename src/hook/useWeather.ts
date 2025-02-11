import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchWeatherDetail } from "../redux/store/slice/weatherDetail";
import { useEffect } from "react";
import { AppRootState, useAppDispatch } from "../redux/store/store";
const useWeather = () => {
  const { lats }: { lats?: string } = useParams();
  const [lat, lon] = (lats ?? "").split(",");
  const latitude: number = parseFloat(lat);
  const longitutde: number = parseFloat(lon);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (latitude && longitutde) {
      console.log(latitude, longitutde);
      dispatch(fetchWeatherDetail({ lat: latitude, long: longitutde }));
    }
  }, [latitude, longitutde, dispatch]);
  const detailOfWeather = useSelector((state: AppRootState) => {
    return { ...state.weatherReview.weatherDetail };
  });

  return detailOfWeather;
};
export default useWeather;
