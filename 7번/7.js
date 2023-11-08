let count = 0;

const countUp = document.querySelector('.count');

function countUpFunc() {
  count++;
  countUp.textContent = count;

  if (count === 10) {
    clearInterval(intervalId);
  }
}

const intervalId = setInterval(countUpFunc, 1000);
