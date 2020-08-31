const displayController = (() => {
  function getInput() {
    const input = document.querySelector('.search');
    return input.value.toLowerCase();
  }

  return { getInput };
})();

export default displayController;
