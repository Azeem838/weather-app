const handleData = (data) => {
  const a = {
    windSpeed: data.wind.speed,
    tempMin: data.main.temp_min,
    tempMax: data.main.temp_max,
    feelsLike: data.main.feels_like,
    humidity: data.main.humidity,
    location: data.name,
  };
  return a;
};

export default handleData;
