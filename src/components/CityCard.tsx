import logo from "../assets/LogoSmall.png";
import Inputbox from "./InputBox";
import useWeather from "../hook/useWeather";
import { useSelector } from "react-redux";
import { useTemprature } from "../hook/useTemprature";
import o01d from "../assets/o01d.png";
import o01n from "../assets/o01n.png";
import o02d from "../assets/o02d.png";
import o02n from "../assets/o02n.png";
import o03d from "../assets/o03d.png";
import o03n from "../assets/o03n.png";
import o09d from "../assets/o09d.png";
import o09n from "../assets/o09n.png";
import o11d from "../assets/o11d.png";
import o11n from "../assets/o11n.png";
import o13d from "../assets/o13d.png";
import o13n from "../assets/o13n.png";
import dividar from "../assets/Divider.png";
import { AppRootState } from "../redux/store/store";
import { Link } from "react-router-dom";
import { useweather } from "../type/type";

const CityCard = () => {
  const data: useweather = useWeather();
  // console.log(data);
  const unit: string = useSelector(
    (state: AppRootState) => state.weatherReview.unit
  );
  const { temChange, converter } = useTemprature();
  // console.log(data.todayWeather);
  const background: Record<string, string> = {
    "01d": o01d,
    "01n": o01n,
    "02d": o02d,
    "02n": o02n,
    "03d": o03d,
    "03n": o03n,
    "09d": o09d,
    "09n": o09n,
    "11d": o11d,
    "11n": o11n,
    "13d": o13d,
    "13n": o13n,
  };
  const bgFinder = (value: string) => {
    switch (value) {
      case "04d":
        return "03d";

      case "04n":
        return "03n";
      case "10d":
        return "09d";
      case "10n":
        return "09n";
      case "50d":
        return "13d";
      case "50n":
        return "13n";
      default:
        console.log(value);
        return value;
    }
  };

  return (
    <div className=" md:w-[650px] w-[320px] lg:h-[520px] h-[332px] md:p-4 p-4 mt-2 rounded-[8px]  bg-fullgray flex flex-col items-center ">
      <div className="flex md:gap-[5px] gap-[5px]">
        <div className="bg-darkgray  relative xl:h-[56px] lg:h-[56px] md:h-[55px] h-[56px] xl:w-[56px] md:w-[45px]  flex items-center justify-center rounded-[8px] ">
          <Link to="/">
            <img
              className="xl:h-[40px] lg:h-[40px] md:h-[30px] sm:h[40px]  md:w-[30px] "
              src={logo}
            />
          </Link>
        </div>
        <div>
          <Inputbox />
        </div>
      </div>
      <div
        className={`md:w-[620px] w-[300px]  xl:h-[616px] lg:h-[550px]  h-[290px]  relative  bg-cover bg-center] rounded-[8px] flex justify-center pt-8 md:p-[32px] p-[22px]`}
        style={{
          backgroundImage: `url(${background[bgFinder(data?.bgImg)]})`,
        }}
      >
        <div className=" flex justify-between w-[568px]">
          <div className=" w-3/4 ">
            <h1 className="lg:text-[20px]  md:text-[20px] text-[16px] text-headingGray">
              {data?.cityname}, {data?.country}
            </h1>
            <div>
              <h1 className="md:text-[15px] text-[12px] text-headingGray">
                {data?.fulldate}
              </h1>
            </div>
          </div>
          <div>
            <h1 className="md:text-[20px] text-[12px] w-1/4 text-headingGray">
              {data?.curretnTime}
            </h1>
          </div>
        </div>
        <div className="absolute lg:bottom-[52px] md:bottom-[22px] bottom-[32px] md:left-[2px] left-[20px] text-center">
          <h1 className="lg:text-[96px] text-[48px] md:ml-[-110px] lg:ml-[-45px] text-white font-black">
            {converter(data?.temprature, unit)}
            <span>&#176;</span>
            <span>{unit}</span>
          </h1>
          <p className="text-white lg:ml-[40px] md:ml-[20px] md:text-[20px] text-[16px]">
            {converter(data?.maxTem, unit)}
            <span>&#176;</span>
            {unit} /{converter(data?.minTem, unit)}
            <span>&#176;</span>
            <span>{unit}</span>
            <button
              className="hover:cursor-pointer ml-2 mr-2"
              onClick={temChange}
            >
              <div> {<img src={dividar} />}</div>
            </button>
            <span className="md:hidden">
              <br />
            </span>
            {data?.description}
          </p>
        </div>
        <img
          className="lg:w-[348px] w-[150px] absolute lg:right-[-31px] md:right-[2px] right-[-05px] lg:bottom-[-40px] bottom-[-05px]"
          src={data?.icon}
        />
      </div>
    </div>
  );
};

export default CityCard;
