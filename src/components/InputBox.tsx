import { useEffect } from "react";
import CityDropDown from "./CityDropDown";
import icons from "../assets/icons.png";
import { useAppDispatch } from "../redux/store/store";
import { useCitySearch } from "../hook/useCitySearch";
import {
  dropDownShow,
  fetchCityData,
  inputData,
} from "../redux/store/slice/citySearch";
import { useHandleKeys } from "../hook/useHandleKeys";

const InputBox = () => {
  const dispatch = useAppDispatch();
  const { cityName, citylist, loading } = useCitySearch();
  const { handleIndex, sethandleIndex, handlekeys } = useHandleKeys(citylist);

  const getCityValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    dispatch(inputData(value));
    dispatch(dropDownShow(value.length > 0));
  };

  useEffect(() => {
    if (cityName) {
      const timer = setTimeout(() => {
        dispatch(fetchCityData(cityName));
        sethandleIndex(-1);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [cityName, dispatch]);

  return (
    <div>
      <div className="relative">
        <input
          className="xl:w-[564px] md:w-[570px] w-[250px] h-[56px] rounded-[8px] text-white bg-darkgray focus:outline-none p-4"
          type="text"
          placeholder="Search Location..."
          value={cityName}
          onChange={getCityValue}
          onKeyDown={handlekeys}
        />
        {loading && (
          <div className="absolute right-0 top-0 bottom-0 flex items-center pointer-events-none pr-3">
            <img className="animate-spin" src={icons} alt="loading.." />
          </div>
        )}
      </div>
      <CityDropDown handleIndex={handleIndex} sethandleIndex={sethandleIndex} />
    </div>
  );
};

export default InputBox;
