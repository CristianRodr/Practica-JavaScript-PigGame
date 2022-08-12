'use strict';

// seleccionando elementos
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

let currentScore = 0;

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
    current0El.textContent = currentScore; // change later
  } else {
    // Cambiar a la siguiente jugadora
  }
});
