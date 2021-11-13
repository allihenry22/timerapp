const convertMilliseconds = (milliseconds, format) => {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const days = Math.floor(totalHours / 24);

  const seconds = totalSeconds % 60;
  const minutes = totalMinutes % 60;
  const hours = totalHours % 24;

  switch (format) {
  case 's':
    return totalSeconds;
  case 'm':
    return totalMinutes;
  case 'h':
    return totalHours;
  case 'd':
    return days;
  default:
    return {
      d: days,
      h: hours,
      m: minutes,
      s: seconds,
    };
  }
};

export default convertMilliseconds;
