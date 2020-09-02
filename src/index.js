import displayController from './dom';
import cityWeather from './get-weather';

require('./get-weather');

const submitForm = document.querySelector('.loc-form');
submitForm.addEventListener('submit', cityWeather);

const toggleUnits = document.querySelector('.custom-control');
toggleUnits.addEventListener('change', displayController.changeUnitsLabel);
