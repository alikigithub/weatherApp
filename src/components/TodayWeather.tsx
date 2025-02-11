import { todayForcast, weatherDetails } from "../type/type";
import useWeather from "../hook/useWeather";
import { useSelector } from "react-redux";
import { converter } from "../formating/temConverter";
import feels from "../assets/feels.png";
import rain from "../assets/rain.png";
import air from "../assets/air.png";
import speed from "../assets/speed.png";
import WeatherForcast from "./WeatherForcast";

const TodayWeather = () => {
  const Weather: weatherDetails = useWeather();
  const dailyWeather: todayForcast = Weather.todayWeather;
  const unit: string = useSelector((state) => state.weatherReview.unit);
  const toogleUnit: string = unit === "C" ? "F" : "C";

  return (
    <div className="flex justify-center flex-col items-center">
      <div className="lg:w-[550px]  md:w-[664px] w-[320px]   md:h-[280px] h-[226px]  rounded-[12px] bg-fullgray lg:mt-[0px] mt-2  md:mt-4  xl:p-4 p-4 md:p-4">
        <div className="h-[62px] p-[12px] md:flex md:show hidden">
          <p className="  text-[16px] text-headGray ">
            Today's weather details
          </p>
        </div>
        <div>
          <ol>
            <li className="w-full h-[56px]   border-b-[1px] border-darkgray flex justify-between items-center mt-[-20px]">
              <div className="flex items-center space-x-2">
                <img
                  className="md:h-[32px] h-[22px] md:w-[32px] w-[22px]"
                  src={feels}
                  alt="weather-icon"
                />
                <p className="md:text-[15px] text-[14px] text-BaseGray">
                  Feels Like
                </p>
              </div>
              <div>
                <p className="text-[16px] text-BaseGray">
                  {converter(dailyWeather?.feelslike, toogleUnit)?.toFixed(0)}{" "}
                  &#176;{unit}
                </p>
              </div>
            </li>{" "}
            <li className="w-full h-[56px]   border-b-[1px] border-darkgray flex justify-between items-center ">
              <div className="flex items-center space-x-2">
                <img
                  className="md:h-[32px] h-[22px] md:w-[32px] w-[22px]"
                  src={rain}
                  alt="weather-icon"
                />
                <p className="md:text-[15px] text-[14px] text-BaseGray">
                  Probability of Rain{" "}
                </p>
              </div>
              <div>
                <p className="text-[15px] text-BaseGray">
                  <p>{dailyWeather?.rain} % </p>
                </p>
              </div>
            </li>{" "}
            <li className="w-full h-[56px]   border-b-[1px] border-darkgray flex justify-between items-center ">
              <div className="flex items-center space-x-2">
                <img
                  className="md:h-[32px] h-[22px] md:w-[32px] w-[22px]"
                  src={air}
                  alt="weather-icon"
                />
                <p className="md:text-[15px] text-[14px] text-BaseGray">
                  Wind Speed
                </p>
              </div>
              <div>
                <p className="text-[15px] text-BaseGray">
                  <p>{dailyWeather?.wind?.toFixed(0)} km/h </p>
                </p>
              </div>
            </li>{" "}
            <li className="w-full h-[56px]    flex justify-between items-center ">
              <div className="flex items-center space-x-2">
                <img
                  className="md:h-[32px] h-[22px] md:w-[32px] w-[22px]"
                  src={speed}
                  alt="weather-icon"
                />
                <p className="md:text-[15px] text-[14px] text-BaseGray">
                  Air Humidity
                </p>
              </div>
              <div>
                <p className="text-[15px] text-BaseGray">
                  <p>{dailyWeather?.air} </p>
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>
      <WeatherForcast />
    </div>
  );
};
export default TodayWeather;
