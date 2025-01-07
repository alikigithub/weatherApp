export const currentTime = () => {
  const data = new Date();
  const hours = data.getHours().toString().padStart(2, "0");
  const min = data.getMinutes().toString().padStart(2, "0");
  const time = `${hours}:${min}`;
  return time;
};
