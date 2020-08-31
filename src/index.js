import displayController from './dom';
import handleData from './sanatize-data';

async function getWeather(e, units = 'metric') {
  e.preventDefault();
  // console.log(displayController.query);
  const query = displayController.getInput();
  try {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=b56e54fcfc83ea96697925d8521b8966&units=${units}`;
    const response = await fetch(url, { mode: 'cors' });
    const weatherData = await response.json();
    handleData(weatherData);
  } catch (err) {
    console.log('There was an error', err);
  }
}

const submitBtn = document.querySelector('.submit');
submitBtn.addEventListener('click', getWeather);
