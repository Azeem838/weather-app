const displayController = (() => {
  const displayCard = (weatherObj) => {
    const container = document.querySelector('.container');
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <img src="#" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Location: ${weatherObj.location}</h5>
          <span class="card-text">Feels like: ${weatherObj.feelsLike}<sup> o</sup>C</span>
          <span>Low: ${weatherObj.tempMin}<sup> o</sup>C</span>
          <span>High: ${weatherObj.tempMax}<sup> o</sup>C</span>

        </div>
        <div class="card-footer">
          <small class="text-muted">Humidity: ${weatherObj.humidity}</small>
          <small class="text-muted">Wind speed: ${weatherObj.windSpeed}</small>
        </div>
    `;
    container.appendChild(card);
  };

  function getInput() {
    const input = document.querySelector('.search');
    return input.value.toLowerCase();
  }

  return { getInput, displayCard };
})();

export default displayController;
