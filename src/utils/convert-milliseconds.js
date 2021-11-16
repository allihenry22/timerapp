const convertMilliseconds = (
  milliseconds,
  format,
) => {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const days = Math.floor(totalHours / 24);

  const seconds = totalSeconds % 60;
  const minutes = totalMinutes % 60;
  const hours = totalHours % 24;

  function stringValue(value) {
    if (value < 1) {
      return '';
    }

    return (value < 10) ? `0${value}` : `${value}`;
  }

  const formattedTime = [
    stringValue(days),
    stringValue(hours),
    stringValue(minutes),
    stringValue(seconds),
  ]
    .filter((vals) => vals)
    .join(':');
  switch (format) {
  case 's':
    return {
      seconds: totalSeconds,
      secondsFormatted: stringValue(totalSeconds),
    };
  case 'm':
    return {
      minutes: totalMinutes,
      minutesFormatted: stringValue(totalMinutes),
    };
  case 'h':
    return {
      hours: totalHours,
      hoursFormatted: stringValue(totalHours),
    };
  case 'd':
    return {
      days,
      daysFormatted: stringValue(days),
    };
  default:
    return {
      d: days,
      h: hours,
      m: minutes,
      s: seconds,
      formatted: formattedTime,
    };
  }
};

export default convertMilliseconds;
