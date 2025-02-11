import Inputbox from "../../components/InputBox";
import HomeHeader from "../../components/HomeHeader";

const WeatherSearch = () => {
  return (
    <div className="h-screen bg-bground w-full flex  flex-col items-center">
      <HomeHeader />
      <Inputbox />
    </div>
  );
};

export default WeatherSearch;
