export const getLocalTimezoneWithGMT = () => {
  const offsetMinutes = new Date().getTimezoneOffset();
  const hours = Math.floor(Math.abs(offsetMinutes) / 60);
  const formattedOffset = `+${hours}`;

  return formattedOffset;
};
