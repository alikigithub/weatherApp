import Inputbox from "../../components/InputBox";
import Logo from "../../components/Logo";

const WeatherSearch = () => {
  return (
    <div className="h-screen bg-bground w-full flex  flex-col items-center">
      <Logo />
      <Inputbox />
    </div>
  );
};

export default WeatherSearch;