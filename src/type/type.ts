export type citylist = {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state: string;
  length: number;
  // map: (callback: (cities: string, index: number) => Component) => Component[];
};
export type sliceState = {
  value: number;
};
export type weather = {
  main: string;
  description: string;
  icon: string;
};
export type weatherEntry = {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: weather[];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
  };
  pop: number;
};
export type weatherDetails = {
  city: { name: string; country: string };
  list: weatherEntry[];
  todayWeather: todayForcast;
};

export type todayForcast = {
  feelslike: number;
  rain: number;
  wind: number;
  air: number;
};
export type Forcastdays = { [key: string]: forcast };

export type forcast = {
  date: string;
  icon: string;
  description: string;
  max_tem: number;
  min_tem: number;
};
export type dropDownType = {
  cities: citylist;
  index: number;
  isSelected: boolean;
  handleIndex: number;
  sethandleIndex: React.Dispatch<React.SetStateAction<number>>;
};
export type nextDay = {
  icon: string;
  description: string;
  max_tem: number;
  min_tem: number;
};
export type formatData = {
  curretnTime: string;
  country: string;
  fulldate: string;
  temprature: number;
  maxTem: number;
  minTem: number;
  description: string;
  icon: string;
  bgImg: number;
  todayWeather: todayForcast;
  nextDays: nextDay;
  daysOfWeek: string[];
  city: { name: string };
  list: weatherEntry[];
};
export type CityDropDownProps = {
  handleIndex: number;
  sethandleIndex: React.Dispatch<React.SetStateAction<number>>;
};
export type useweather = {
  bgImg: string;
  cityname?: string;
  country?: string;
  fulldate?: string;
  curretnTime?: string;
  temprature: number;
  maxTem: number;
  minTem: number;
  description?: string;
  icon?: string;
};

export type todayweather = {
  feelslike: number;
  rain: number;
  wind: number;
  air: number;
};
export type cityDataSearch = {
  citylist: citylist | [];
  status: string;
  city: string | null;
  dropdown: boolean;
  loading: boolean;
};
