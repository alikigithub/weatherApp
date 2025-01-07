import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getcity } from "../../../aPI/citySearch";
import { citylist } from "../../../type/type";

export const fetchCityData = createAsyncThunk(
  "city/detail",
  async (city: string) => {
    try {
      const cityData = await getcity(city);

      const cityDetails: citylist = cityData;
      return cityDetails;
    } catch (error) {
      throw new Error(`City Data is not hapening ${error}`);
    }
  }
);
const citySearch = createSlice({
  name: "CitySearch",
  initialState: {
    citylist: [],
    status: "pending",
    city: " ",
    dropdown: false,
    loading: false,
    key: "",
    handleIndex: -1,
  } as {
    citylist: citylist | [];
    status: string;
    city: string;
    dropdown: boolean;
    loading: boolean;
    key: string;
    handleIndex: number;
  },
  reducers: {
    inputData: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    citisList: (state, action) => {
      state.citylist = action.payload;
    },
    dropDownShow: (state, action) => {
      state.dropdown = action.payload;
    },
    loadingShow: (state, action) => {
      state.loading = action.payload;
    },
    setIndex: (state, action) => {
      if (action.payload == "ArrowDown") {
        state.handleIndex = (state.handleIndex + 1) % state.citylist.length;
      } else if (action.payload == "ArrowUp") {
        state.handleIndex =
          state.handleIndex == 0
            ? state.citylist.length - 1
            : state.handleIndex - 1;
      } else {
        state.handleIndex = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCityData.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchCityData.fulfilled, (state, action) => {
        console.log(action);
        state.citylist = action.payload;
        state.status = "fullfilled";
      })
      .addCase(fetchCityData.rejected, (state) => {
        state.status = "rejected";
      });
  },
});
export default citySearch.reducer;
export const { inputData, citisList, dropDownShow, loadingShow, setIndex } =
  citySearch.actions;
