import { citylist } from "../type/type";

import { useAppSelector } from "../redux/store/store";

export const useCitySearch = () => {
  const citylist: citylist = useAppSelector(
    (state) => state.citySearchData.citylist
  );
  const isApiAvaiable: string = useAppSelector(
    (state) => state.citySearchData.status
  );
  const cityName: string = useAppSelector((state) => state.citySearchData.city);
  const loading: boolean = useAppSelector(
    (state) => state.citySearchData.loading
  );
  const dropDown: boolean = useAppSelector(
    (state) => state.citySearchData.dropdown
  );

  return { citylist, isApiAvaiable, cityName, loading, dropDown };
};
