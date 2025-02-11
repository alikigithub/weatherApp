import { useDispatch } from "react-redux";
import { unitConvert } from "../redux/store/slice/weatherDetail";

export const useTemprature = () => {
  const dispatch = useDispatch();

  const temChange = () => {
    dispatch(unitConvert());
  };

  const converter = (tem: number, unit: string) => {
    let value;
    if (unit === "F") value = tem;
    else {
      value = (tem - 273.15).toFixed(0);
    }
    return value;
  };

  return { temChange, converter };
};
