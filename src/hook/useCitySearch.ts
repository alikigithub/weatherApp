import { useSelector } from "react-redux";
import { citylist } from "../type/type";
import { RootState } from "@reduxjs/toolkit/query";

export const useCitySearch = () => {
  const citylist: citylist = useSelector(
    (state: RootState) => state.citySearchData.citylist
  );
  const isApiAvaiable: string = useSelector(
    (state) => state.citySearchData.status
  );
  const cityName: string = useSelector((state) => state.citySearchData.city);
  const loading: boolean = useSelector((state) => state.citySearchData.loading);
  const dropDown: boolean = useSelector(
    (state) => state.citySearchData.dropdown
  );

  return { citylist, isApiAvaiable, cityName, loading, dropDown };
};
