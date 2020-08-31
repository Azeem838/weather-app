const weather = (() => {
  async function getWeather(lat, lon) {
    try {
      const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b56e54fcfc83ea96697925d8521b8966`;
      const response = await fetch(url, { mode: 'cors' });
      const weatherData = await response.json();
      console.log(weatherData);
    } catch (err) {
      console.log('There was an error', err);
    }
  }
  function success(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    getWeather(lat, lon);
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success);
  }
})();
