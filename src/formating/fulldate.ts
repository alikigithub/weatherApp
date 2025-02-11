export const fulldate = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    weekday: "long",
  });
};
