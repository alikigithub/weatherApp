import { useDispatch } from "react-redux";
import {
  dropDownShow,
  inputData,
  loadingShow,
  setIndex,
} from "../redux/store/slice/selectCity";
import { dropDownType } from "../type/type";
import { useNavigate } from "react-router-dom";
import { useCitySearch } from "../hook/useCitySearch";
import { useAppSelector } from "../redux/store/store";

const DropDownData = ({ cities, index, isSelected }: dropDownType) => {
  const dispatch = useDispatch();
  const { citylist } = useCitySearch();
  const navigate = useNavigate();

  const handleIndex = useAppSelector(
    (state) => state.citySearchData.handleIndex
  );

  return (
    <button
      key={index}
      onClick={() => {
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
      }}
      onMouseEnter={() => {
        dispatch(setIndex(index));
      }}
      className={`md:w-[570px] w-[250px] hover:bg-lightGary focus:bg-lightGary ${
        isSelected ? "bg-lightGary" : "bg-lightGary"
      } 
      ${isSelected ? "border-4 border-white" : "bg-none"}
      
      h-[54px] p-2 rounded-[8px] border-b-[1.5px] flex items-center`}
    >
      <p className="text-font-4 leading-[16px] text-BaseGray">
        {cities.name} , {cities.state} , {cities.country}
      </p>
    </button>
  );
};

export default DropDownData;
