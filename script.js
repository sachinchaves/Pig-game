"use strict";

// Selecting Elements
const score0Element = document.getElementById("score--0");
const score1Element = document.getElementById("score--1");
const diceElement = document.querySelector(".dice");

// Setting the value to 0
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add("hidden");
