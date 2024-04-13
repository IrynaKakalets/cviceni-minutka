'use strict';

console.log('funguju!');


const formElm = document.querySelector('.controls');

formElm.addEventListener('submit', (e) => {
  e.preventDefault();

  const timeInput = Number(document.querySelector('.time-input').value);
  let time = timeInput * 60;

  const countdownInterval = setInterval(() => {
    const minutes = Math.floor(time / 60); // Získáme celé minuty
    const seconds = time % 60; // Získáme zbývající sekundy

    document.querySelector('.alarm__minutes').textContent = String(
      minutes,
    ).padStart(2, '0');
    document.querySelector('.alarm__seconds').textContent = String(
      seconds,
    ).padStart(2, '0');

    time -= 1;

    if (time === -1) {
      clearInterval(countdownInterval);
      document.querySelector('audio').play();
    }
  }, 1000);
});
