import DropDownData from "./DropDownData";
import { useCitySearch } from "../hook/useCitySearch";
import { citylist } from "../type/type";
const CityDropDown = ({
  handleIndex,
  sethandleIndex,
}: {
  handleIndex: number;
  sethandleIndex: number;
}) => {
  const {
    dropDown,
    citylist,
    isApiAvaiable,
  }: { dropDown: boolean; citylist: citylist; isApiAvaiable: string } =
    useCitySearch();

  return (
    <div className="mt-2 ">
      {dropDown == true && citylist && citylist.length > 0 ? (
        <div className="absolute z-10">
          {citylist.map((cities: citylist, index: number) => (
            <DropDownData
              cities={cities}
              index={index}
              isSelected={index === handleIndex}
              handleIndex={handleIndex}
              sethandleIndex={sethandleIndex}
            />
          ))}
        </div>
      ) : isApiAvaiable == "rejected" ? (
        <p className="text-red-500 text-center">
          Error: Unable to fetch city data. Please try again later.
        </p>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default CityDropDown;
