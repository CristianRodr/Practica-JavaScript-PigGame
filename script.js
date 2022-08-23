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

let scores, currentScore, activePlayer, playing;

// Empezar las condiciones

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//funcionalidad de los dados rodantes
btnRoll.addEventListener('click', function () {
  if (playing) {
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
      switchPlayer();
    }
  }
});

btnhold.addEventListener('click', function () {
  if (playing) {
    // 1. Agregue la puntuacion actual a la puntuacion del jugador activo
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    scores[activePlayer];
    // 2. comprobar si la puntuación del jugador >= 100
    if (scores[activePlayer] >= 20) {
      // terminar el juego
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Cambiar al siguiente jugador
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
