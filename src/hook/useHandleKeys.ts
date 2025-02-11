import { useState } from "react";
import { useAppDispatch } from "../redux/store/store";
import {
  inputData,
  loadingShow,
  dropDownShow,
} from "../redux/store/slice/citySearch";
import { useNavigate } from "react-router-dom";
import { citylist as CityListType } from "../type/type";

export const useHandleKeys = (citylist: CityListType) => {
  const [handleIndex, sethandleIndex] = useState<number>(-1);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handlekeys = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!citylist || citylist.length === 0) return;

    if (e.key === "ArrowDown") {
      sethandleIndex((prev) => (prev + 1) % citylist.length);
    } else if (e.key === "ArrowUp") {
      sethandleIndex((prev) => (prev === 0 ? citylist.length - 1 : prev - 1));
    } else if (e.key === "Enter") {
      if (handleIndex > -1) {
        const selectedCity = citylist[handleIndex];
        dispatch(
          inputData(
            `${selectedCity.name},${selectedCity.state},${selectedCity.country}`
          )
        );
        dispatch(loadingShow(true));

        setTimeout(() => {
          navigate(`/${selectedCity.lat},${selectedCity.lon}`);
          dispatch(dropDownShow(false));
          dispatch(loadingShow(false));
          dispatch(inputData(""));
        }, 200);
      } else {
        alert("Select a valid city name, please.");
      }
    }
  };

  return { handleIndex, sethandleIndex, handlekeys };
};
