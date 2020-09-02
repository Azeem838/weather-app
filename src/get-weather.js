import displayController from './dom';
import handleData from './sanatize-data';

(() => {
  async function getWeather(lat, lon, units = 'metric') {
    try {
      const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b56e54fcfc83ea96697925d8521b8966&units=${units}`;
      const response = await fetch(url, { mode: 'cors' });
      const result = await response.json();
      const data = handleData(result);
      displayController.displayCard(data);
    } catch (err) {
      displayController.displayError();
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

async function cityWeather(e) {
  e.preventDefault();
  const units = displayController.getUnit();
  const query = displayController.getInput();
  try {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=b56e54fcfc83ea96697925d8521b8966&units=${units}`;
    const response = await fetch(url, { mode: 'cors' });
    const result = await response.json();
    const data = handleData(result);
    displayController.displayCard(data);
  } catch (err) {
    displayController.displayError();
  }
}

export default cityWeather;
