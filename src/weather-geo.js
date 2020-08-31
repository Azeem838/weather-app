const weather = () => {
  async function getWeather(lat, lon, units = 'metric') {
    try {
      const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b56e54fcfc83ea96697925d8521b8966&units=${units}`;
      const response = await fetch(url, { mode: 'cors' });
      const weatherData = await response.json();
      handleData(weatherData);
    } catch (err) {
      console.log('There was an error', err);
    }
  }

  function handleData(data) {
    const a = {
      windSpeed: data.wind.speed,
      tempMin: data.main.temp_min,
      tempMax: data.main.temp_max,
      feelsLike: data.main.feels_like,
      humidity: data.main.humidity,
    };
    console.log(a);
  }

  function success(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    getWeather(lat, lon);
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success);
  }
};
