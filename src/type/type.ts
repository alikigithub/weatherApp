export type city = {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state: string;
  length: number;
};
export type citylist = city[];

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
export type todayForcast = {
  feelslike: number;
  rain: number;
  wind: number;
  air: number;
};
export type weatherDetails = {
  city: { name: string; country: string };
  list: weatherEntry[];
  cityname: string;
  curretnTime: string;
  country: string;
  fulldate: string;
  temprature: string;
  maxTem: string;
  minTem: string;
  description: string;
  icon: string;
  bgImg: string;
  todayWeather: todayForcast;
  nextDays: Forcastdays;
  daysOfWeek: string[];
};

export type forcast = {
  date: string;
  icon: string;
  description: string;
  max_tem: number;
  min_tem: number;
};
export type Forcastdays = { [key: string]: forcast };
export type dropDownType = {
  cities: {
    name: string;
    state: string;
    country: string;
  };
  index: number;
  isSelected: boolean;
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
  cityname: string;
  country: string;
  fulldate: string;
  curretnTime: string;
  temprature: string;
  maxTem: string;
  minTem: string;
  description: string;
  icon: string;
};

export type todayweather = {
  feelslike: number;
  rain: number;
  wind: number;
  air: number;
};
