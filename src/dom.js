const displayController = (() => {
  const unitToggle = document.querySelector('.unit-toggle');
  const error = document.getElementById('error');
  const container = document.querySelector('.container.cards');
  const toggleUnitsLabel = document.querySelector('.units-label');

  const clearFields = () => {
    error.innerText = '';
    container.innerHTML = '';
  };

  const displayCard = (weatherObj) => {
    clearFields();
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <div class="card-body">
          <h5 class="card-title">Location: ${weatherObj.location}</h5>
          <span class="card-text">Feels like: ${
  weatherObj.feelsLike
  }<sup> o</sup>${unitToggle.checked ? 'C' : 'F'}</span>
          <span>Low: ${weatherObj.tempMin}<sup> o</sup>${
    unitToggle.checked ? 'C' : 'F'
  }</span>
          <span>High: ${weatherObj.tempMax}<sup> o</sup>${
    unitToggle.checked ? 'C' : 'F'
  }</span>
        </div>
        <div class="card-footer">
          <small class="text-muted">Humidity: ${weatherObj.humidity}%</small>
          <small class="text-muted">Wind speed: ${weatherObj.windSpeed}</small>
        </div>
    `;
    container.appendChild(card);
  };

  function getInput() {
    const input = document.querySelector('.search');
    return input.value.toLowerCase();
  }

  function getUnit() {
    if (unitToggle.checked) {
      return 'metric';
    }
    return 'imperial';
  }

  const displayError = () => {
    error.innerText = 'There was an error getting the weather. Please make sure you entered a location and try again';
  };

  const changeUnitsLabel = () => {
    if (unitToggle.checked) {
      toggleUnitsLabel.innerHTML = 'Metric';
    } else {
      toggleUnitsLabel.innerHTML = 'Imperial';
    }
  };

  const displayGif = (srcURL) => {
    const img = document.createElement('img');
    img.src = srcURL;

    container.appendChild(img);
  };

  return {
    getInput,
    displayCard,
    getUnit,
    displayError,
    changeUnitsLabel,
    displayGif,
  };
})();

export default displayController;
