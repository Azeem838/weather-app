import displayController from './dom';
import handleData from './sanatize-data';
require('./style.scss');
async function getWeather(e) {
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

const submitForm = document.querySelector('.loc-form');
submitForm.addEventListener('submit', getWeather);
