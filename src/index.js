import displayController from './dom';
import { cityWeather, getGif } from './get-weather';
import handleData from './sanatize-data';

require('./get-weather');

const submitForm = document.querySelector('.loc-form');
submitForm.addEventListener('submit', (e) => {
  e.preventDefault();

  Promise.resolve(cityWeather())
    .then((result) => handleData(result))
    .then((data) => {
      displayController.displayCard(data);
      Promise.resolve(getGif(data.weatherStatus)).then((src) => displayController.displayGif(src));
    });
});

const toggleUnits = document.querySelector('.custom-control');
toggleUnits.addEventListener('change', displayController.changeUnitsLabel);
