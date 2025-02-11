import {
  dropDownShow,
  inputData,
  loadingShow,
} from "../redux/store/slice/citySearch";
import { dropDownType } from "../type/type";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/store/store";

const DropDownData = ({
  cities,
  index,
  isSelected,

  sethandleIndex,
}: dropDownType) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleCitySelection = () => {
    if (!cities) return;

    dispatch(inputData(`${cities.name}, ${cities.state}, ${cities.country}`));
    dispatch(loadingShow(true));

    setTimeout(() => {
      navigate(`/${cities.lat},${cities.lon}`);
      dispatch(dropDownShow(false));
      dispatch(loadingShow(false));
      dispatch(inputData(""));
    }, 200);
  };

  return (
    <button
      key={index}
      onClick={handleCitySelection}
      onMouseEnter={() => sethandleIndex(index)}
      className={`md:w-[570px] w-[250px] h-[54px] p-2 rounded-[8px] border-b-[1.5px] flex items-center 
        hover:bg-lightGary focus:bg-lightGary
        ${isSelected ? "bg-lightGary border-4 border-white" : "bg-lightGary"}
      `}
    >
      <p className="text-font-4 leading-[16px] text-BaseGray">
        {cities.name}, {cities.state}, {cities.country}
      </p>
    </button>
  );
};

export default DropDownData;
