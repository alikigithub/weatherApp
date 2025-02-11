export const converter = (tem: number, unit: string) => {
  let value;
  if (unit === "C") value = tem;
  else {
    value = tem - 273.15;
  }
  return value;
};
