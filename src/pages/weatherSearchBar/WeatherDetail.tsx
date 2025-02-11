import CityCard from "../../components/CityCard";
import TodayWeather from "../../components/TodayWeather";

const WeatherDetail = () => {
  return (
    <div className=" md:min-h-[100vh]  h-[full] bg-bground w-full flex justify-center items-center xl:flex-row lg:flew-row md:flex-col flex-col lg:gap-3 ">
      <div>
        <CityCard />
      </div>
      <div>
        <TodayWeather />
      </div>
    </div>
  );
};

export default WeatherDetail;
