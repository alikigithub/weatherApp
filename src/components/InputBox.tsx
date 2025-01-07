import { useEffect } from "react";
import CityDropDown from "./CityDropDown";
import { citylist } from "../type/type";
import icons from "../../public/assets/Icons.png";
import { useNavigate } from "react-router-dom";
import {
  dropDownShow,
  fetchCityData,
  inputData,
  loadingShow,
  setIndex,
} from "../redux/store/slice/selectCity";
import { useCitySearch } from "../hook/useCitySearch";
import { useAppDispatch, useAppSelector } from "../redux/store/store";

const Inputbox = () => {
  // const [handleIndex, sethandleIndex] = useState<number>(-1);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    cityName,
    citylist,
    loading,
  }: {
    cityName: string;
    citylist: citylist;
    loading: boolean;
    dropDown: boolean;
  } = useCitySearch();

  console.log(cityName);
  const getCityValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    dispatch(inputData(value));
    dispatch(dropDownShow(value.length > 0));
  };
  const handleIndex = useAppSelector(
    (state) => state.citySearchData.handleIndex
  );
  useEffect(() => {
    if (cityName) {
      const timer = setTimeout(() => {
        dispatch(fetchCityData(cityName));
        dispatch(setIndex(-1));
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [cityName, dispatch]);

  const handlekeys = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!citylist || citylist.length == 0) return;
    if (e.key === "ArrowDown") {
      dispatch(setIndex("ArrowDown"));
    } else if (e.key === "ArrowUp") {
      dispatch(setIndex("ArrowUp"));
    } else if (e.key === "Enter") {
      if (handleIndex > -1) {
        dispatch(
          inputData(
            `${citylist[handleIndex]?.name},${citylist[handleIndex]?.state},${citylist[handleIndex]?.country}`
          )
        );
        dispatch(loadingShow(true));
        setTimeout(() => {
          navigate(
            `/${citylist[handleIndex]?.lat},${citylist[handleIndex]?.lon}`
          );
          dispatch(dropDownShow(true));
          dispatch(loadingShow(false));
          dispatch(inputData(""));
          dispatch(dropDownShow(false));
        }, 200);
      } else {
        alert("Select Valid City Name please");
      }
    }
  };

  return (
    <div>
      <div className="relative ">
        <input
          className="xl:w-[564px] md:w-[570px]  w-[250px]  h-[56px] rounded-[8px]
        text-white bg-darkgray focus:outline-none p-4"
          type="text"
          placeholder="Search Location..."
          value={cityName}
          onChange={getCityValue}
          onKeyDown={handlekeys}
        />
        {loading ? (
          <div className="absolute  right-0 top-0 bottom-0 flex items-center pointer-events-none pr-3">
            <img className="animate-spin" src={icons} alt="loading.." />
          </div>
        ) : (
          <></>
        )}
      </div>
      <CityDropDown />
    </div>
  );
};

export default Inputbox;
