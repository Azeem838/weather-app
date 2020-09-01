import displayController from './dom';
import handleData from './sanatize-data';

async function getWeather(e, units = 'metric') {
  e.preventDefault();
  const query = displayController.getInput();
  try {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=b56e54fcfc83ea96697925d8521b8966&units=${units}`;
    const response = await fetch(url, { mode: 'cors' });
    const result = await response.json();
    const data = handleData(result);
    displayController.displayCard(data);
  } catch (err) {
    console.log('There was an error', err);
  }
}

const submitForm = document.querySelector('.loc-form');
submitForm.addEventListener('submit', getWeather);
