'use strict';

// seleccionando elementos
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');

// Empezar las condiciones
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//funcionalidad de los dados rodantes
btnRoll.addEventListener('click', function () {
  // 1. Generando una tirada de dados aleatoria
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  // 2. mostramos los dados
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  //3. Buscamos una tirada a uno basicamente: if true, cambio de jugador
  if (dice != 1) {
    // Agregar los dados a la puntuacion actual
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // Cambiar a la siguiente jugadora
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
