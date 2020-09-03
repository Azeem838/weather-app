import displayController from './dom';
import handleData from './sanatize-data';

async function getGif(val) {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=bb2006d9d3454578be1a99cfad65913d&s=${val}`,
      { mode: 'cors' },
    );
    const result = await response.json();
    const src = result.data.images.original.url;
    return src;
  } catch (err) {
    displayController.displayError();
  }
  return null;
}

(() => {
  async function getWeather(lat, lon, units = 'metric') {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b56e54fcfc83ea96697925d8521b8966&units=${units}`;
      const response = await fetch(url, { mode: 'cors' });
      const result = await response.json();
      const data = handleData(result);
      displayController.displayCard(data);
      const src = await getGif(data.weatherStatus);
      displayController.displayGif(src);
    } catch (err) {
      displayController.displayError();
    }
    return null;
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

async function cityWeather() {
  const units = displayController.getUnit();
  const query = displayController.getInput();
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=b56e54fcfc83ea96697925d8521b8966&units=${units}`;
    const response = await fetch(url, { mode: 'cors' });
    const result = await response.json();
    return result;
  } catch (err) {
    displayController.displayError();
  }
  return null;
}

export { cityWeather, getGif };
